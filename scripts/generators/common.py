import re
import json

def clean_t(title):
    t = re.sub(r'\s+[—–]\s+.*$', '', title).strip()
    return re.sub(r'\(.*\)', '', t).strip()

def strip_punc(w):
    return re.sub(r'[.,?!;:()\'"’]', '', w)

def clean_en(text):
    cleaned = re.sub(r'[:;—–/\\()\'"’]', ' ', text)
    words = [strip_punc(w) for w in cleaned.split() if strip_punc(w)]
    return ' '.join(words)

def make_available_words(target_en, distractors):
    words = [strip_punc(w) for w in target_en.split() if strip_punc(w)]
    res = []
    seen = set()
    for w in words:
        wl = w.lower()
        if wl not in seen:
            seen.add(wl)
            res.append(w)
    for d in distractors:
        ds = strip_punc(d)
        if not ds:
            continue
        dl = ds.lower()
        if dl not in seen:
            seen.add(dl)
            res.append(ds)
    return res

def validate_blueprint(bp, lesson_id, used_sb, used_ex, used_qc):
    # Check SB
    sb = bp['sentenceBuilder']
    target_en = sb['targetEn']
    if target_en in used_sb:
        raise ValueError(f"Duplicate sentence builder target in lesson {lesson_id}: {target_en}")
    used_sb.add(target_en)
    
    # Check words in availableWords
    target_words = [strip_punc(w).lower() for w in target_en.split() if strip_punc(w)]
    avail_words = [strip_punc(w).lower() for w in sb['availableWords']]
    for tw in target_words:
        if tw not in avail_words:
            raise ValueError(f"Lesson {lesson_id}: target word '{tw}' missing from availableWords! Target: {target_en}, Avail: {sb['availableWords']}")
            
    # Check Exercise
    ex = bp['exercise']
    ex_sentence = ex['sentence']
    if ex_sentence in used_ex:
        raise ValueError(f"Duplicate exercise sentence in lesson {lesson_id}: {ex_sentence}")
    used_ex.add(ex_sentence)
    
    if ex['correctAnswer'] not in ex['options']:
        raise ValueError(f"Lesson {lesson_id}: correctAnswer '{ex['correctAnswer']}' not in options {ex['options']}")
        
    # Check Quick Check
    qc = bp['quickCheck']
    qc_q = qc['question']
    if qc_q in used_qc:
        raise ValueError(f"Duplicate quick check question in lesson {lesson_id}: {qc_q}")
    used_qc.add(qc_q)
    
    if qc['correctIndex'] < 0 or qc['correctIndex'] >= len(qc['options']):
        raise ValueError(f"Lesson {lesson_id}: invalid quickCheck correctIndex {qc['correctIndex']}")
        
    # Check breakdown steps
    if len(bp['stepBreakdown']) < 3:
        raise ValueError(f"Lesson {lesson_id}: requires at least 3 breakdownSteps")
        
    # Check rule cards
    if len(bp['ruleCards']) < 2:
        raise ValueError(f"Lesson {lesson_id}: requires at least 2 ruleCards")
        
    # Check common mistakes
    if len(bp['commonMistakes']) < 2:
        raise ValueError(f"Lesson {lesson_id}: requires at least 2 commonMistakes")
        
    # Check examples
    if len(bp['examples']) < 3:
        raise ValueError(f"Lesson {lesson_id}: requires at least 3 examples")
        
    # Check vocabulary
    if len(bp['vocabulary']) < 4:
        raise ValueError(f"Lesson {lesson_id}: requires at least 4 vocabulary items")
        
    return True

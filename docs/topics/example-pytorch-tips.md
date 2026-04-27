---
title: "PyTorch — 자주 까먹는 것들 (예시)"
description: "기술 학습 템플릿 예시"
tags: [example, pytorch]
---

# PyTorch — 자주 까먹는 것들

> 디버깅 중에 매번 검색하던 것들 모음

## Why?

학습 루프를 짤 때마다 `.to(device)`, `.detach()`, `.requires_grad` 헷갈림 → 한 번에 정리.

## 자주 쓰는 패턴

### 평가 모드 + no_grad

```python
model.eval()
with torch.no_grad():
    preds = model(x)
```

### Gradient accumulation

```python
optimizer.zero_grad()
for i, (x, y) in enumerate(loader):
    loss = model(x, y) / accum_steps
    loss.backward()
    if (i + 1) % accum_steps == 0:
        optimizer.step()
        optimizer.zero_grad()
```

---

> 예시. [`templates/topic-note`](../templates/topic-note.md) 복사해서 본인 노트로 만드세요.

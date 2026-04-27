---
title: "Attention Is All You Need (예시)"
description: "논문 정리 템플릿 사용 예시. 실제 노트로 교체하거나 삭제하세요."
tags: [example, transformer, nlp]
---

# Attention Is All You Need

> Vaswani et al., NeurIPS 2017 — [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)

## TL;DR

RNN/CNN 없이 **self-attention**만으로 시퀀스 모델링이 가능함을 보임. 병렬화가 쉬워 학습이 빠르고 번역 SOTA를 달성.

## 1. 풀고자 한 문제

- RNN의 순차 의존성 → 병렬화 불가, 긴 컨텍스트 학습 비효율.
- 어텐션을 보조가 아닌 **메인 메커니즘**으로 끌어올릴 수 있는가?

## 2. 핵심 아이디어

- Scaled dot-product attention + multi-head를 쌓아 인코더-디코더 구성.
- Positional encoding으로 순서를 주입.

## 3. 방법

```text
Input -> Embed + PosEnc -> [N x (MHA + FFN)] -> Output
```

(이하 본인 언어로 정리)

---

> 이 글은 템플릿 사용 예시입니다. 실제 글을 작성할 때는 [`templates/paper-summary`](../templates/paper-summary.md)를 복사하세요.

### Written by AI
This text was written by an AI, I do not understand half of it. I only had the idea. 

# Does Monty Know?

### Detecting the host's knowledge in the Monty Hall game — a study in survivorship bias

*The classic Monty Hall problem comes with fine print that everyone argues about: the host **knows** where the car is. This article takes a variant of the game in which the host's knowledge is genuinely in doubt — and shows that a player can settle the question empirically, with overwhelming confidence, without ever observing the host's mind. The trick is that "an informed host" and "an ignorant host whose failures are edited out" produce identical-looking games but different statistics. Part 1 tells the story in plain language. Part 2 makes it mathematically precise. Part 3 explains why this is really an article about survivorship bias.*

---

## 1. The story

First, the classic game in two sentences. A car is hidden behind one of three doors, goats behind the other two; you pick a door, the host — who knows where the car is — opens a *different* door revealing a goat, and offers you a switch. Famously, switching wins 2 out of 3 times.

Now the variant. You never see the beginning of the game. A door is reserved for you by a fair random draw before you even enter the studio. The host then opens one of the two remaining doors. Only when a goat is on display are you brought in. What you see, every single time, is the same tableau: your reserved door, closed; one other door, open, goat; one last door, closed.

Here is the question: **does this host actually know where the car is?** Maybe he does, and deliberately steers around it. Or maybe he is opening doors blindly, and the production team simply throws away every taping in which he embarrasses himself by revealing the car. From your chair, one aired game looks *exactly* the same either way. Even which of the two doors stands open is a 50/50 coin flip under both scenarios. The host's knowledge leaves no fingerprint on the stage.

It does leave a fingerprint on the scoreboard.

Suppose you play 1000 of these games, and to keep things maximally simple you always **stay** with your reserved door. You are not trying to win — you are trying to measure. Your door was chosen by a fair random draw among three doors, so it holds the car in 1 of 3 games. That number was fixed before the host lifted a finger. Nothing the host does can move your door or move the car. So you walk in expecting roughly **333 wins out of 1000**.

Now imagine the count comes in at roughly **500**.

Doors don't move. Your pick was random. And yet you are winning half the time. There is only one way out of this contradiction: **you have not been shown all the games.** Somewhere, tapings are being burned — and they are not being burned at random.

Here is the beautiful part. A blind host can only blunder into the car when the car is behind one of the two doors he might open — that is, precisely when the car is *not* behind your door. In other words: **every single destroyed taping is a game you were going to lose.** The editors think they are merely cutting out the host's accidents; in fact they are systematically deleting your failures and nothing else.

The arithmetic is tidy. To air 1000 clean shows, a blind-host production must tape about 1500. In about 500 of them the car is behind your door — the host cannot go wrong there, all of those air, and you win every one. In the other 1000 the car is behind one of *his* two doors, and he stumbles onto it about half the time: 500 tapings burned, 500 aired, all 500 of the aired ones losses for you. The aired record: 500 wins, 500 losses. Fifty-fifty — even though across all 1500 games actually played, you won exactly your honest one third.

So the test is almost embarrassingly simple. Always stay. Count wins. **Around 333: the host knows. Around 500: the host is guessing, and someone is quietly feeding tapes to a shredder.** With 1000 games, the two predictions are so far apart relative to random noise (about eleven standard deviations — see Part 2) that there is no realistic possibility of confusion.

One more remark before the mathematics. Nothing in the *scenes* you watch carries any information — not in one game, not across all 1000. The doors, the goats, the staging: statistically identical under both scenarios. All of the information is in one place only: where the car turns out to be, game after game. Knowledge that is invisible in any snapshot becomes visible as a frequency.

---

## 2. The mathematics

### 2.1 Model

Doors are labeled $\{1,2,3\}$. In each taping, the car position $C$ and the player's reserved door $P$ are independent and uniform on $\{1,2,3\}$. The host opens a door $H \ne P$. Two hypotheses describe the host:

**Hypothesis $K$ (knowing host).** $H$ is drawn uniformly from $\{1,2,3\}\setminus\{P,C\}$. (This set has two elements when $P=C$, otherwise one.) By construction $H \ne C$ always; every taping airs.

**Hypothesis $I$ (ignorant host).** $H$ is drawn uniformly from $\{1,2,3\}\setminus\{P\}$, independently of $C$. Define the survival event

$$
S \;=\; \{\,H \ne C\,\}.
$$

A taping airs if and only if $S$ occurs. The player observes an i.i.d. sequence of *aired* games, i.e. draws from the conditional law given $S$.

The player's strategy is **stay**; the quantity recorded in each aired game is the indicator of the event $\{C = P\}$ ("stay wins"), revealed at the end of the game.

### 2.2 Lemma 1 — a single game reveals nothing

*Under $K$, and under $I$ conditioned on $S$, the visible scene $(P,H)$ has the same joint law: $P$ uniform on $\{1,2,3\}$, and $H$ uniform on the two doors other than $P$.*

**Proof.** Fix $P = p$. Under $I$: for each $h \ne p$, $\Pr(H=h,\,C \ne h \mid P=p) = \tfrac12 \cdot \tfrac23 = \tfrac13$, since $H$ and $C$ are independent given $P$; hence $\Pr(S \mid P=p) = \tfrac23$ and $\Pr(H=h \mid P=p,\,S) = \tfrac12$. Under $K$: condition on the car. If $C=p$ (probability $\tfrac13$), each $h \ne p$ is opened with probability $\tfrac12$; if $C=h$ (probability $\tfrac13$), door $h$ is never opened; if $C$ is the remaining door (probability $\tfrac13$), door $h$ is opened with certainty. Total: $\tfrac13\cdot\tfrac12 + \tfrac13\cdot 0 + \tfrac13\cdot 1 = \tfrac12$. $\blacksquare$

Since aired games are i.i.d. under both hypotheses, the entire *sequence of scenes* over any number of games is also identically distributed under $K$ and $I$. Every bit of discriminating information resides in the revealed car positions — the outcomes.

### 2.3 Proposition 2 — win rates in aired games

*Stay wins an aired game with probability $\tfrac13$ under $K$ and $\tfrac12$ under $I$. (Equivalently, switch wins with probability $\tfrac23$ under $K$ and $\tfrac12$ under $I$.)*

**Proof.** Under $K$ every taping airs, so the aired stay-win probability is the unconditional one: $\Pr(C=P) = \tfrac13$. Under $I$, note first that the host can hit the car only when the car is not behind the reserved door, and then with probability $\tfrac12$:

$$
\Pr(S) \;=\; \Pr(C=P)\cdot 1 \;+\; \Pr(C\ne P)\cdot \tfrac12 \;=\; \tfrac13 + \tfrac13 \;=\; \tfrac23 .
$$

Bayes' rule then gives

$$
\Pr(C = P \mid S) \;=\; \frac{\Pr(C=P)\,\Pr(S \mid C=P)}{\Pr(S)} \;=\; \frac{\tfrac13 \cdot 1}{\tfrac23} \;=\; \frac12 .
$$

The switch statements follow because in every aired game exactly one closed alternative remains, so "switch wins" is the complement of "stay wins". $\blacksquare$

**Remark (assumption-minimality).** All four numbers survive even *adversarial* car placement. If the reserved door $P$ is drawn uniformly and independently of everything else — say, by a public randomization device the player trusts — then $\Pr(C=P)=\tfrac13$ holds for *any* distribution of $C$, and the computation above goes through verbatim ($\Pr(S\mid C\ne P)=\tfrac12$ by the symmetry of the host's blind choice). The test rests on the fairness of one die roll: the player's own.

### 2.4 Proposition 3 — anatomy of the censoring

*Under $I$:*

1. *$\Pr(S) = \tfrac23$: one third of all tapings are discarded.*
2. *$\{H = C\} \subseteq \{C \ne P\}$: **every discarded taping is a stay-loss** (the host cannot open the reserved door, so he can only reveal a car that is not behind it).*
3. *Across **all** tapings, aired or not, the stay-win rate is exactly $\tfrac13$. The lift from $\tfrac13$ to $\tfrac12$ on aired games is produced entirely by selective deletion of losses — no probability is created, only hidden.*

In expected counts, for 1500 tapings:

| | Car behind reserved door | Car behind a host door | Total |
|---|---:|---:|---:|
| Tapings | 500 | 1000 | 1500 |
| Discarded (host reveals car) | 0 | 500 | 500 |
| **Aired** | **500** | **500** | **1000** |
| Stay result in aired games | 500 wins | 500 losses | 50 % wins |

The unconditional ledger — 500 wins in 1500 games — is the honest $\tfrac13$. The aired ledger shows $\tfrac12$ because the 500 missing games are losses, all of them.

### 2.5 The statistical test

Let $X_n$ be the number of stay-wins among $n$ aired games. Then

$$
X_n \sim \mathrm{Bin}\!\left(n, \tfrac13\right) \text{ under } K,
\qquad
X_n \sim \mathrm{Bin}\!\left(n, \tfrac12\right) \text{ under } I .
$$

For $n = 1000$: means $333.3$ vs. $500$, standard deviations $\sqrt{1000\cdot\frac13\cdot\frac23} \approx 14.9$ and $\sqrt{250} \approx 15.8$. The means sit

$$
\frac{500 - 333.3}{14.9} \;\approx\; 11.2 \text{ standard deviations apart.}
$$

A likelihood-ratio threshold lands at $x^{\ast} = n\,\frac{\ln(4/3)}{\ln 2} \approx 415$; deciding "$K$" below and "$I$" above it, the normal approximation puts both error probabilities on the order of $10^{-8}$ — for any practical purpose, certainty.

The evidence can also be accounted per game. Each aired win multiplies the odds for $I$ against $K$ by $\frac{1/2}{1/3} = \frac32$; each loss by $\frac{1/2}{2/3} = \frac34$. The expected log-likelihood ratio per game is the Kullback–Leibler divergence

$$
D\!\left(\mathrm{Bern}(\tfrac12)\,\big\|\,\mathrm{Bern}(\tfrac13)\right) = \tfrac12\ln\tfrac32 + \tfrac12\ln\tfrac34 \approx 0.059 \text{ nats} \approx 0.085 \text{ bits}
$$

under $I$ (and $\approx 0.057$ nats under $K$, in the other direction). That is **about one bit of evidence every twelve games**: roughly 80 games for 100:1 odds, and after 1000 games an expected $\sim 85$ bits — posterior odds of order $10^{25}$ to one. The setting of "1000 games" is comfortable overkill; a determined player has the answer beyond reasonable doubt after an afternoon.

### 2.6 Why "stay" is the right test statistic

Statistically, stay and switch are not two tests but one: in every aired game "switch wins" is the negation of "stay wins", so the switch-win count is $n - X_n$. Identical information, identical power.

The difference is epistemic. The switch baseline of $\tfrac23$ is the protocol-dependent, famously contested Monty Hall result — testing for it means leaning on the very reasoning that is under dispute. The stay baseline of $\tfrac13$ is **pre-theoretical**: it is fixed the moment a fair three-way draw reserves a door, before the host exists as a concept, and (per the Remark in 2.3) it does not even require fair car placement. One can explain the entire detection scheme to someone who has never heard of Monty Hall: *my pick was a fair one-in-three draw; the doors never moved; I win half the time; therefore I am not seeing all the games.* No conditional-probability argument survives contact with a dinner party — this one does.

---

## 3. The bigger picture: survivorship bias, measured

Strip away the goats and the structure is this. Two generative processes — **(a)** an informed agent who never fails, and **(b)** a blind agent whose failures are silently removed — produce *identically distributed surviving snapshots* but *different conditional statistics*. The knowledge itself is unobservable; the selection that substitutes for it is detectable.

The detection recipe generalizes:

> Find a quantity whose value is pinned down **upstream** of the suspected filter, measure it **downstream**, and read the gap. A deviation proves the filter exists; its direction tells you what the filter selects on.

Here the upstream anchor is $\Pr(C=P)=\tfrac13$, sealed by the player's own random draw; the downstream measurement is the aired win rate; the gap of $+\tfrac16$ points exactly at "losses are being deleted."

The same structure appears whenever we only observe the cases that made it through a filter. A company may advertise the performance of its surviving funds while quietly omitting the funds that were closed. Advice books may interview only successful founders and miss the many similar attempts that failed. In each case, the surviving sample looks complete from the inside, but the missing cases are exactly what would change the statistic. Same filter, same fix: recover the full denominator, or find a quantity anchored upstream of the selection.

There is also a lesson flowing back into the classic puzzle. The textbook answer "switch — it's $\tfrac23$" silently assumes the informed host. Under an ignorant host who merely *happened* to reveal a goat (Rosenthal's "Monty Fall" variant), the switch advantage evaporates to $\tfrac12$ — exactly the Proposition 2 computation. Internet arguments about Monty Hall routinely founder on this unstated protocol assumption, treated as if it were metaphysics. The point of this article is that it is not metaphysics. **It is a measurable parameter of the world**, and 1000 games pin it down to eleven sigma.

---

## 4. Seeing it in the simulation

If a standard Monty Hall simulation already exists, the host-knowledge detector is a three-line extension: a policy flag, a discard branch, and a counter over aired games.

```python
aired = []
for _ in range(N_TAPINGS):
    car  = random_door()
    pick = random_door()                    # drawn before the player arrives
    if HOST_KNOWS:
        opened = random_goat_door(exclude=pick, car=car)
    else:
        opened = random_other_door(exclude=pick)
        if opened == car:
            continue                        # taping burned; the player never sees it
    aired.append(car == pick)               # did "stay" win?

print(sum(aired) / len(aired))              # → 1/3 if HOST_KNOWS else 1/2
```

Two plots make the effect vivid. First, the running stay-win frequency over aired games, with reference lines at $\tfrac13$ and $\tfrac12$: the trajectory locks onto one of them within a few hundred games. Second — visible to the simulation though never to the player — the discard rate under the ignorant host, which converges to $\tfrac13$: the production-side fingerprint of the same selection effect. Together they show both faces of the phenomenon: the inflated statistic the survivor sees, and the pile of burned tape that explains it.

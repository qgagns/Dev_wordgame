// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {

    schoolTag: "테스트용",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "TEST",      // 학교별 독립 DB 분리 키 (다른 학교와 랭킹/계정이 안 섞임)

    // 🎛️ [교사용 마스터 계정] 선생님만 아는 관리자 로그인 아이디/비밀번호
    adminId: "qlagn",          // 관리자 로그인 아이디
    adminPw: "0112",           // 관리자 비밀번호
    adminName: "책선생",        // 👈 선생님 성함 지정!


    // ⚔️ [수호령전 체력 & 시간 & 플레이어 목숨]
    guardianHp1: 5,            // 1회차 수호령 체력 (기본: 5)
    guardianTime1: 7.0,        // 1회차 수호령 시간 (기본: 7.0초)

    guardianHpRepeat: 7,       // 2회차 수호령 체력 (기본: 7)
    guardianTimeRepeat: 5.0,   // 2회차 수호령 시간 (기본: 5.0초)
    guardianPlayerHpRepeat: 2, // 👈 2회차 수호령전 플레이어 하트 수 (기본: 3개)

    // 👑 [마왕전 체력 & 시간 & 플레이어 목숨]
    bossHp1: 20,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 4.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 20,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 3.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 2,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

    // 🚨 [안개 구출전 일일 쿼터 설정] (일반 단어 계약량에 따라 하루 의무 구출량 배정)
    rescueQuota: [
        { reqWords: 400, quota: 20 }, // 일반 단어 400마리 이상: 하루 20마리
        { reqWords: 240, quota: 15 }, // 일반 단어 240마리 이상: 하루 15마리
        { reqWords: 120, quota: 10 }, // 일반 단어 120마리 이상: 하루 10마리
        { reqWords: 0,   quota: 5  }  // 기본(0마리 이상): 하루 5마리
    ],

    // 🔥 [시험 직전 파이널] 하드코어 특훈
    hardcoreMode: {
        enabled: true,                       // 켜기(true) / 끄기(false)
        title: "책 선생의 하드코어 점검",            // 시험 명칭
        targetMaps: "all",                   // "all" 또는 ["ch1", "ch2"]
        hp: 15,                              // 출제 문제 수 (마왕 체력)
        playerHp: 2,                         // 👈 하드코어 플레이어 하트 수 (기본: 3개, 1개로 하면 원코인 데스!)
        timeLimit: 3                       // 문제당 제한 시간 (초)
    }
};

// ========================================================
// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서\
// ========================================================
// 단어 목록: 아래에 단어 목록을 붙여넣으세요.
// ========================================================
const WORLD_MAPS_TEXT = `

[net_1: 동의어 / 반의어]
increase, expand, grow, augment : [동] 증가하다, 팽창하다
<=>
decrease, shrink, reduce, diminish : [동] 감소하다, 축소하다

encourage, foster, promote, boost : [동] 촉진하다, 북돋우다
<=>
discourage, hinder, impede, suppress : [동] 저해하다, 억제하다

clear, explicit, distinct, obvious : [형] 명확한, 뚜렷한
<=>
vague, ambiguous, obscure, hazy : [형] 모호한, 불분명한

essential, crucial, vital, fundamental : [형] 필수적인, 결정적인
<=>
trivial, minor, negligible, dispensable : [형] 사소한, 없어도 되는

abundant, plentiful, ample, rich : [형] 풍부한, 넉넉한
<=>
scarce, insufficient, deficient, meager : [형] 부족한, 불충분한


[passage_CE_L4: 옥정고1 4과 지문]
# 글을 보며 뜻을 떠올려 보는 연습
=== 1. 도입부 ===
[[Imagine | imagine: [동] ~을 상상하다, 마음속에 그리다]] you have fallen down and broken your right arm. 
There are some things that would be difficult to do with your [[injured | injure: [동] 다치게 하다, 부상 입히다]] arm. 
For example, you might not be able to carry heavy boxes or ride your bike. 
What about [[accessing | access: [동] (컴퓨터로) ~에 접속하다]] the Internet? 
If you are [[right-handed | right-handed: [형] 오른손잡이인]], using a computer mouse or touchscreen with your left hand would be [[awkward | awkward: [형] (동작∙행동 등이) 어색한]] and [[take a lot of time | take time: [동] 시간이 걸리다, 시간을 가지다]].
The [[accessibility | accessibility: [명] 접근성, 이용성]] [[features | feature: [명] 특징, 특성]] of websites don’t just help people with [[disabilities | disability: [명] 장애, 불능]]. 
They can make online experiences easier for everyone, [[regardless of | regardless of ~: [전] ~에 상관없이]] abilities or situations. 
When websites are easy to navigate and understand, we can all [[benefit | benefit: [명] 이득, 이익; [동] 이익이 되다; [동] (from) 이익을 얻다]] from a more [[inclusive | inclusive: [형] 차별 없는, 포용적인]] online experience.


[spell_1: 스펠링 테스트용]
#2학기 2차 수행 단어. 철자까지 확인하는 까탈스러운 정령들이다!
implicit	:	[형] 암시적인
indigenous	:	[형] 토착의
indispensable	:	[형] 없어서는 안 되는
inherent	:	[형] 내재된
innate	:	[형] 선천적인
intrinsic	:	[형] 본질적인
jeopardize	:	[동] 위태롭게 하다
journal	:	[명] 학술지
juvenile	:	[형] 청소년의
kinship	:	[명] 유대


[irreg_verbs: 불규칙 동사의 늪]
# 제멋대로 모습을 바꾸는 동사 정령들이 서식하는 늪
drive (drove, driven): [동] 운전하다, 몰다
ride (rode, ridden): [동] 타다
write (wrote, written): [동] 쓰다
break (broke, broken): [동] 부수다
choose (chose, chosen): [동] 선택하다, 고르다
freeze (froze, frozen): [동] 얼다, 얼리다
speak (spoke, spoken): [동] 말하다
steal (stole, stolen): [동] 훔치다
get (got, got): [동] 얻다; ~해지다
forget (forgot, forgotten): [동] 잊다
begin (began, begun): [동] 시작하다
drink (drank, drunk): [동] 마시다
run (ran, run): [동] 달리다
shrink (shrank, shrunk): [동] 줄어들다
sing (sang, sung): [동] 노래하다
spring (sprang, sprung): [동] 튀어 오르다
swim (swam, swum): [동] 수영하다
take (took, taken): [동] 잡다, 가지다
shake (shook, shaken): [동] 흔들다, 흔들리다
mistake (mistook, mistaken): [동] 실수하다
blow (blew, blown): [동] 불다
fly (flew, flown): [동] 날다, 날리다
grow (grew, grown): [동] 자라다; 키우다
know (knew, known): [동] 알고 있다
throw (threw, thrown): [동] 던지다
withdraw (withdrew, withdrawn): [동] 철회하다
swear (swore, sworn): [동] 맹세하다
tear (tore, torn): [동] 찢다
wear (wore, worn): [동] 입다
show (showed, shown): [동] 보여주다
be (was/were, been): [동] 있다/이다
beat (beat, beaten): [동] 때리다
become (became, become): [동] 되다
bite (bit, bitten): [동] 물다
come (came, come): [동] 오다
do (did, done): [동] 하다
eat (ate, eaten): [동] 먹다
fall (fell, fallen): [동] 떨어지다, 넘어지다
forbid (forbade, forbidden): [동] 금지하다
give (gave, given): [동] 주다
forgive (forgave, forgiven): [동] 용서하다
go (went, gone): [동] 가다
hide (hid, hidden): [동] 숨다, 숨기다
lie (lay, lain): [동] 눕다
see (saw, seen): [동] 보다
bleed (bled, bled): [동] 피를 흘리다
feed (fed, fed): [동] 먹이다
lead (led, led): [동] 이끌다
meet (met, met): [동] 만나다
read (read, read): [동] 읽다
shoot (shot, shot): [동] 쏘다, 발사하다
sleep (slept, slept): [동] 자다
speed (sped, sped): [동] 속도를 내다
hear (heard, heard): [동] 듣다
dig (dug, dug): [동] 파다
hang (hung, hung): [동] 매달다, 걸다
stick (stuck, stuck): [동] 찌르다; 붙이다
strike (struck, struck): [동] 치다, 때리다
wake (woke, woken): [동] 깨우다
shine (shone, shone): [동] 빛나다, 광을 내다
win (won, won): [동] 이기다; 얻다
build (built, built): [동] 세우다, 짓다
lend (lent, lent): [동] 빌려주다
lose (lost, lost): [동] 잃다; 지다
send (sent, sent): [동] 보내다
spend (spent, spent): [동] (돈, 시간 등을)사용하다, 쓰다
deal (dealt, dealt): [동] 다루다; 거래하다
mean (meant, meant): [동] 의미하다
bend (bent, bent): [동] 구부리다
feel (felt, felt): [동] 느끼다
hold (held, held): [동] 잡다, 쥐다
keep (kept, kept): [동] 유지하다; 기르다
leave (left, left): [동] 떠나다; 남겨두다
bring (brought, brought): [동] 가져오다
buy (bought, bought): [동] 사다
catch (caught, caught): [동] 잡다
fight (fought, fought): [동] 싸우다
seek (sought, sought): [동] 찾다, 추구하다
teach (taught, taught): [동] 가르치다
think (thought, thought): [동] 생각하다
find (found, found): [동] 찾다, 발견하다
pay (paid, paid): [동] 지불하다
say (said, said): [동] 말하다
stand (stood, stood): [동] 서다
understand (understood, understood): [동] 이해하다
sell (sold, sold): [동] 팔다
tell (told, told): [동] 말하다
have (had, had): [동] 가지고 있다, 소유하고 있다
light (lit, lit): [동] (불을)켜다, 밝히다
make (made, made): [동] 만들다
sit (sat, sat): [동] 앉다
slide (slid, slid): [동] 미끄러지다
burst (burst, burst): [동] 터뜨리다
cost (cost, cost): [동] 비용이~가 들다
cut (cut, cut): [동] 자르다
hit (hit, hit): [동] 치다
hurt (hurt, hurt): [동] 다치게 하다; 아프다
put (put, put): [동] 두다, 놓다
set (set, set): [동] 놓다; 마련하다
shut (shut, shut): [동] 닫다, 잠그다
spread (spread, spread): [동] 펴다, 펼치다


[irreg_nouns: 불규칙 명사의 언덕]
# 제멋대로 모습을 바꾸는 명사 정령들이 서식하는 언덕
man (men): [명] 남자, 사람
woman (women): [명] 여자
child (children): [명] 아이, 어린이
person (people): [명] 사람
foot (feet): [명] 발
tooth (teeth): [명] 이, 치아
goose (geese): [명] 거위
mouse (mice): [명] 쥐
ox (oxen): [명] 황소
louse (lice): [명] 이(곤충)
sheep (sheep): [명] 양
deer (deer): [명] 사슴
fish (fish): [명] 물고기, 생선
species (species): [명] 종(생물 분류 단위)
series (series): [명] 연속, 시리즈
aircraft (aircraft): [명] 항공기
medium (media): [명] 매체, 대중매체
curriculum (curricula): [명] 교육과정, 커리큘럼
criterion (criteria): [명] 기준, 표준
phenomenon (phenomena): [명] 현상
crisis (crises): [명] 위기
basis (bases): [명] 근거, 기초
analysis (analyses): [명] 분석
hypothesis (hypotheses): [명] 가설
oasis (oases): [명] 오아시스
stimulus (stimuli): [명] 자극, 자극제
fungus (fungi): [명] 균류, 곰팡이
cactus (cacti): [명] 선인장


[irreg_ads: 불규칙 형용사/부사의 굴]
# 제멋대로 모습을 바꾸는 형용사/부사 정령들이 서식하는 굴
good (better, best): [형] 좋은
well (better, best): [부] 잘, 좋게
bad (worse, worst): [형] 나쁜
ill (worse, worst): [형] 아픈, 나쁜
badly (worse, worst): [부] 심하게, 나쁘게
many (more, most): [형] 많은 (셀 수 있는 명사 수식)
much (more, most): [형/부] 많은, 많이 (셀 수 없는 명사 수식)
little (less, least): [형/부] 적은, 적게 (양/정도)
far (거리) (farther, farthest): [형/부] 먼, 더 먼, 가장 먼
far (정도) (further, furthest): [형/부] 나아간, 더 나아간, 가장 깊은
late (시간) (later, latest): [형/부] 늦은, 더 늦은, 가장 최근의
late (순서) (latter, last): [형] (둘 중) 나중의, 후자의, 마지막의
old (나이) (older, oldest): [형] 나이 든, 더 나이 든, 가장 나이 든
old (서열) (elder, eldest): [형] 나이 든, 손위의, 가장 맏이의


[m1-1: 모험의 시작]
# 모험을 시작하는 기본 어휘들
apply:[동] 적용하다; [동] 신청하다, 지원하다; [동] 도포하다, 바르다
return:[명] 귀환, [동] 돌아오다; [명] 반납, [동] 돌려주다
call:[동] 부르다, 전화하다, [명] 부름; [명] 요청
carry:[동] 나르다, 가지고 다니다
add:[동] 더하다, 추가하다
suppose:[동] 추측하다, 가정하다
invite:[동] 초대하다
study:[동] 공부하다, 연구하다; [명] 공부, 연구
keep:[동] 유지하다, 계속하다; [동] 키우다, 기르다
appear:[동] 나타나다; [동] ~처럼 보이다


`;

const categories = {
	all: {
		id: "all",
		entries: ["UX/UI-дизайн", "Анимация и иллюстрация", "Моушн-дизайн и 3D", "Графический дизайн и коммуникации", "Дизайн среды и интерьера", "Маркетинг", "IT и менеджмент", "Видео и кино", "Современное искусство", "Программирование и софт"],
	},
	design: {
		id: "design",
		filters: ["ux-design", "motion-design", "animation-illustration", "graf-design", "int-design"],
		entries: ["UX/UI-дизайн", "Анимация и иллюстрация", "Моушн-дизайн и 3D", "Графический дизайн и коммуникации", "Дизайн среды и интерьера"],
	},
	marketing: {
		id: "marketing",
		entries: ["Маркетинг"],
	},
	gamedev: {
		id: "gamedev",
		entries: [],
	},
	fashion: {
		id: "fashion",
		entries: [],
	},
	other: {
		id: "other",
		entries: ["IT и менеджмент", "Видео и кино", "Современное искусство", "Программирование и софт"],
	},
};

const cards = {
	"UX/UI-дизайн": {
		id: "design",
		filter: "ux-design",
		entries: {
			"UX-дизайн": {
				id: "ux",
				img: "https://static.tildacdn.com/tild6265-6337-4838-b161-613331396531/ux.png",
				description: "Андрей Гаргуль",
			},
			"UX: Поведенческое проектирование": {
				id: "ux-behavior",
				img: "https://static.tildacdn.com/tild6438-3330-4639-b165-333864393764/ux-pp.png",
				description: "Дмитрий Карпов",
			},
			"Практики цифровой доступности": {
				id: "ux-accessibility",
				img: "https://static.tildacdn.com/tild3163-6262-4738-b266-393736663836/pcd.png",
				description: "Илья Ковалев",
			},
			"Sketch. app": {
				id: "sketch",
				img: "https://static.tildacdn.com/tild3666-3561-4162-b639-613531633866/sketch.png",
				description: "Александр Катин",
			},
			"Сетки и проектирование сайтов": {
				id: "grid",
				img: "https://static.tildacdn.com/tild3464-6636-4537-b662-356331363961/grids.png",
				description: "Александр Гладких и Сергей Гуров",
			},
		},
	},
	"Моушн-дизайн и 3D": {
		id: "design",
		filter: "motion-design",
		entries: {
			"Быстрая анимация иллюстрации в After Effects": {
				id: "after-effects",
				img: "https://static.tildacdn.com/tild3032-6134-4234-b438-363466646639/aae.png",
				description: "Константин Новиков",
			},
			"Реалистичный концепт-арт": {
				id: "concept-art",
				img: "https://static.tildacdn.com/tild3731-6136-4164-b137-306635653331/concept.png",
				description: "Николай Разуев",
			},
			"Создание 3D-композиции: Houdini, 3D-Coat, рендер": {
				id: "threeD-composition",
				img: "https://static.tildacdn.com/tild6238-3664-4263-a433-363364313636/3d-creating.png",
				description: "JA ZA",
			},
		},
	},
	"Анимация и иллюстрация": {
		id: "design",
		filter: "animation-illustration",
		entries: {
			"Перспектива в иллюстрации": {
				id: "perspective",
				img: "https://static.tildacdn.com/tild3131-3264-4439-a333-616434656333/illustration-perspec.png",
				description: "Илья Митрошин",
			},
			"Что такое микростоки?": {
				id: "microstock",
				img: "https://static.tildacdn.com/tild3731-3665-4437-a264-626433356233/microstock.png",
				description: "Надя Снопек",
			},
			"Рисование 2.0. Техники для развития": {
				id: "drawing-2",
				img: "https://static.tildacdn.com/tild3566-3230-4166-b464-623930636131/draw20.png",
				description: "Илья Митрошин",
			},
			"Фотореалистичные раскадровки": {
				id: "photorealism",
				img: "https://static.tildacdn.com/tild3934-3761-4132-a432-303738306562/photorealism.png",
				description: "Татьяна Васьковская",
			},
			"Основы Procreate": {
				id: "procreate",
				img: "https://static.tildacdn.com/tild3561-3838-4836-b063-396637386239/procreate.png",
				description: "Егор Голополосов",
			},
		},
	},
	"Графический дизайн и коммуникации": {
		id: "design",
		filter: "graf-design",
		entries: {
			"Дизайн журналов": {
				id: "magazine-design",
				img: "https://static.tildacdn.com/tild6631-3166-4335-b061-303865653439/desidn-magazins.png",
				description: "Дмитрий Гиенко",
			},
			"Мультидисциплинарный дизайн": {
				id: "multidisciplinary-design",
				img: "https://static.tildacdn.com/tild3434-3465-4330-a534-616463333038/design-multimedia.png",
				description: "White Russian",
			},
			"Создание пространства в Adobe Illustrator: инструменты и приемы": {
				id: "adobe-illustrator",
				img: "https://static.tildacdn.com/tild3836-3461-4665-a138-656337326532/adobe-illustr.png",
				description: "Свят Вишняков",
			},
			"Нелинейная история дизайна": {
				id: "nonlinear-design",
				img: "https://static.tildacdn.com/tild6630-6137-4634-a133-343831383437/design-history.png",
				description: "",
			},
			"Основы айдентики: построение визуальной системы": {
				id: "identity",
				img: "https://static.tildacdn.com/tild6132-3936-4833-b464-656361633131/identic.png",
				description: "Виталий Цыганков",
			},
		},
	},
	"Дизайн среды и интерьера": {
		id: "design",
		filter: "int-design",
		entries: {
			"Дизайн-практикум по созданию интерьера": {
				id: "interior-design",
				img: "https://static.tildacdn.com/tild6131-6236-4261-a633-666235663336/design-interior.png",
				description: "Кира Чувелева",
			},
		},
	},
	"Современное искусство": {
		id: "other",
		filter: "modern-art",
		entries: {
			"Женщины в искусстве": {
				id: "women-art",
				img: "https://static.tildacdn.com/tild6235-6233-4238-a362-666230663561/art-woman.png",
				description: "Ольга Герасименко",
			},
			"Как узнать себя через искусство?": {
				id: "self-art",
				img: "https://static.tildacdn.com/tild3666-6333-4466-b233-313731633964/self-art.png",
				description: "Ольга Герасименко",
			},
			"Что случилось с искусством за последние 100 лет — короче, Современность!": {
				id: "art-100y",
				img: "https://static.tildacdn.com/tild3333-3332-4438-b366-623961316564/art-100y.png",
				description: "Александр Журавлев и Алина Глазун",
			},
			"История современной музыки и теория звука": {
				id: "music-history",
				img: "https://static.tildacdn.com/tild3865-6139-4635-b830-383861306532/music-history.png",
				description: "Виктор Черненко",
			},
		},
	},
	"IT и менеджмент": {
		id: "other",
		filter: "it-management",
		entries: {
			"Дизайн-менеджмент: как создавать и продавать дизайн": {
				id: "design-management",
				img: "https://static.tildacdn.com/tild3131-6338-4130-b664-613964643036/management.png",
				description: "Антон Гора и Алексей Лури",
			},
			"Создание новых продуктов: методология Customer Development": {
				id: "customer-development",
				img: "https://static.tildacdn.com/tild3164-3866-4636-b761-643863303161/custom-devel.png",
				description: "Мария Ющенко",
			},
			"Обработка и анализ данных в Excel": {
				id: "excel",
				img: "https://static.tildacdn.com/tild3632-3732-4232-b930-366330393533/excel.png",
				description: "Александр Михайлов",
			},
			"Как руководить дизайнерами": {
				id: "design-management",
				img: "https://static.tildacdn.com/tild3563-3966-4536-b762-653336363131/design-lead.png",
				description: "Костя Горский",
			},
			"Методы анализа рынка и конкурентов": {
				id: "market-analysis",
				img: "https://static.tildacdn.com/tild3565-3338-4237-b731-313337646433/Image.png",
				description: "Александр Кужелев и Надежда Назарова",
			},
		},
	},
	"Видео и кино": {
		id: "other",
		filter: "video-cinema",
		entries: {
			"Женщины в истории кино": {
				id: "women-cinema",
				img: "https://static.tildacdn.com/tild6566-6333-4665-a365-663464303735/cinema-woman.png",
				description: "Алиса Таежная",
			},
			"Танец и пластика в кино. Особенности языка и история драматургии": {
				id: "cinema-dance",
				img: "https://static.tildacdn.com/tild6365-6236-4436-b035-366665393138/cinema-dance.png",
				description: "Энжи Таратута, Владимир Егоров и Денис Тагинцев",
			},
		},
	},
	"Программирование и софт": {
		id: "other",
		filter: "programming-software",
		entries: {
			"Вечера с Arduino. Базовый курс": {
				id: "arduino",
				img: "https://static.tildacdn.com/tild6665-6365-4333-b664-383566313966/arduino.png",
				description: "Константин Новиков",
			},
			"Рисуем кодом": {
				id: "code-art",
				img: "https://static.tildacdn.com/tild3261-3366-4935-b931-356363623862/code-art.png",
				description: "Александр Катин",
			},
			"Создание музыки с помощью компьютера и доступного ПО": {
				id: "music-create",
				img: "https://static.tildacdn.com/tild6265-6531-4332-a437-656434616639/music-create.png",
				description: "Сергей Касич",
			},
		},
	},
	"Маркетинг": {
		id: "marketing",
		filter: "marketing",
		entries: {
			"Контент-менеджер на маркетплейсах": {
				id: "content-manager",
				img: "https://static.tildacdn.com/tild3231-3330-4564-b537-373239626532/marketplaces.png",
				description: "Виктория Комратова, Наталья Чертова, Анастасия Бурындина, Екатерина Коршунова, Марина Ермакова",
			},
			"Креативы в контекстной рекламе": {
				id: "creatives",
				img: "https://static.tildacdn.com/tild3864-6661-4634-b131-663333616234/creatives.png",
				description: "Кирилл Сорокин",
			},
			"CRM-маркетолог": {
				id: "crm",
				img: "https://static.tildacdn.com/tild3661-3834-4232-b737-326564336465/crm-marketing.png",
				description: "Татьяна Зубкова",
			},
			"Digital-директор": {
				id: "digital-director",
				img: "https://static.tildacdn.com/tild3761-3232-4232-b934-653162636564/digital-director.png",
				description: "Андрей Гавриков, Татьяна Таганова, Алексей Добрусин, Ольга Реутова, Юлия Пьянкова, Евгений Летов",
			},
			"Как делать исследования маркетологу": {
				id: "research",
				img: "https://static.tildacdn.com/tild3766-6639-4231-b166-386563643138/research.png",
				description: "Андрей Гавриков и Алексей Добрусин",
			},
			"Account based marketing": {
				id: "account-based-marketing",
				img: "https://static.tildacdn.com/tild6164-6139-4664-a465-633265643136/abm.png",
				description: "Андрей Гавриков",
			},
			"5 шагов к продающему контент-плану": {
				id: "content-plan",
				img: "https://static.tildacdn.com/tild3664-6361-4166-b738-626363323563/content-plan.png",
				description: "Татьяна Таганова и Варвара Бекетова",
			},
		},
	},
};

export default {categories, cards}
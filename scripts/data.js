export const categories = {
	all: {
		id: "all",
		entries: "all",
	},
	design: {
		id: "design",
		entries: ["UX/UI-дизайн", "Анимация и иллюстрация", "Моушн-дизайн и 3D", "Графический дизайн и коммуникации", "Дизайн среды и интерьера"],
	},
	marketing: {
		id: "marketing",
		entries: [],
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

export const cards = {
	"UX/UI-дизайн": {
		id: "ux-ui-design",
		entries: {
			"UX-дизайн": {
				img: "https://static.tildacdn.com/tild6265-6337-4838-b161-613331396531/ux.png",
				descripttion: "Андрей Гаргуль",
			},
			"UX: Поведенческое проектирование": {
				img: "https://static.tildacdn.com/tild6438-3330-4639-b165-333864393764/ux-pp.png",
				descripttion: "Дмитрий Карпов",
			},
			"Практики цифровой доступности": {
				img: "https://static.tildacdn.com/tild3163-6262-4738-b266-393736663836/pcd.png",
				descripttion: "Илья Ковалев",
			},
			"Sketch. app": {
				img: "https://static.tildacdn.com/tild3666-3561-4162-b639-613531633866/sketch.png",
				descripttion: "Александр Катин",
			},
			"Сетки и проектирование сайтов": {
				img: "https://static.tildacdn.com/tild3464-6636-4537-b662-356331363961/grids.png",
				descripttion: "Александр Гладких и Сергей Гуров",
			},
		},
	},
	"Моушн-дизайн и 3D": {
		id: "motion-design-and-3d",
		entries: {
			"Быстрая анимация иллюстрации в After Effects": {
				img: "https://static.tildacdn.com/tild3032-6134-4234-b438-363466646639/aae.png",
				descripttion: "Константин Новиков",
			},
			"Реалистичный концепт-арт": {
				img: "https://static.tildacdn.com/tild3731-6136-4164-b137-306635653331/concept.png",
				descripttion: "Николай Разуев",
			},
			"Создание 3D-композиции: Houdini, 3D-Coat, рендер": {
				img: "https://static.tildacdn.com/tild6238-3664-4263-a433-363364313636/3d-creating.png",
				descripttion: "JA ZA",
			},
		},
	},
	"Современное искусство": {
		id: "modern-art",
		entries: {
			"Женщины в искусстве": {
				img: "https://static.tildacdn.com/tild6235-6233-4238-a362-666230663561/art-woman.png",
				descripttion: "Ольга Герасименко",
			},
			"Как узнать себя через искусство?": {
				img: "https://static.tildacdn.com/tild3666-6333-4466-b233-313731633964/self-art.png",
				descripttion: "Ольга Герасименко",
			},
			"Что случилось с искусством за последние 100 лет — короче, Современность!": {
				img: "https://static.tildacdn.com/tild3333-3332-4438-b366-623961316564/art-100y.png",
				descripttion: "Александр Журавлев и Алина Глазун",
			},
			"История современной музыки и теория звука": {
				img: "https://static.tildacdn.com/tild3865-6139-4635-b830-383861306532/music-history.png",
				descripttion: "Виктор Черненко",
			},
		},
	},
	"IT и менеджмент": {
		id: "it-and-management",
		entries: {
			"Дизайн-менеджмент: как создавать и продавать дизайн": {
				img: "https://static.tildacdn.com/tild3131-6338-4130-b664-613964643036/management.png",
				descripttion: "Антон Гора и Алексей Лури",
			},
			"Создание новых продуктов: методология Customer Development": {
				img: "https://static.tildacdn.com/tild3164-3866-4636-b761-643863303161/custom-devel.png",
				descripttion: "Мария Ющенко",
			},
			"Обработка и анализ данных в Excel": {
				img: "https://static.tildacdn.com/tild3632-3732-4232-b930-366330393533/excel.png",
				descripttion: "Александр Михайлов",
			},
			"Как руководить дизайнерами": {
				img: "https://static.tildacdn.com/tild3563-3966-4536-b762-653336363131/design-lead.png",
				descripttion: "Костя Горский",
			},
			"Методы анализа рынка и конкурентов": {
				img: "https://static.tildacdn.com/tild3565-3338-4237-b731-313337646433/Image.png",
				descripttion: "Александр Кужелев и Надежда Назарова",
			},
		},
	},
	"Видео и кино": {
		id: "video-and-cinema",
		entries: {
			"Женщины в истории кино": {
				img: "https://static.tildacdn.com/tild6566-6333-4665-a365-663464303735/cinema-woman.png",
				descripttion: "Алиса Таежная",
			},
			"Танец и пластика в кино. Особенности языка и история драматургии": {
				img: "https://static.tildacdn.com/tild6365-6236-4436-b035-366665393138/cinema-dance.png",
				descripttion: "Энжи Таратута, Владимир Егоров и Денис Тагинцев",
			},
		},
	},
	"Программирование и софт": {
		id: "programming-and-software",
		entries: {
			"Вечера с Arduino. Базовый курс": {
				img: "https://static.tildacdn.com/tild6665-6365-4333-b664-383566313966/arduino.png",
				descripttion: "Константин Новиков",
			},
			"Рисуем кодом": {
				img: "https://static.tildacdn.com/tild3261-3366-4935-b931-356363623862/code-art.png",
				descripttion: "Александр Катин",
			},
			"Создание музыки с помощью компьютера и доступного ПО": {
				img: "https://static.tildacdn.com/tild6265-6531-4332-a437-656434616639/music-create.png",
				descripttion: "Сергей Касич",
			},
		},
	},
	"Анимация и иллюстрация": {
		id: "animation-and-illustration",
		entries: {
			"Перспектива в иллюстрации": {
				img: "https://static.tildacdn.com/tild3131-3264-4439-a333-616434656333/illustration-perspec.png",
				descripttion: "Илья Митрошин",
			},
			"Что такое микростоки?": {
				img: "https://static.tildacdn.com/tild3731-3665-4437-a264-626433356233/microstock.png",
				descripttion: "Надя Снопек",
			},
			"Рисование 2.0. Техники для развития": {
				img: "https://static.tildacdn.com/tild3566-3230-4166-b464-623930636131/draw20.png",
				descripttion: "Илья Митрошин",
			},
			"Фотореалистичные раскадровки": {
				img: "https://static.tildacdn.com/tild3934-3761-4132-a432-303738306562/photorealism.png",
				descripttion: "Татьяна Васьковская",
			},
			"Основы Procreate": {
				img: "https://static.tildacdn.com/tild3561-3838-4836-b063-396637386239/procreate.png",
				descripttion: "Егор Голополосов",
			},
		},
	},
	"Графический дизайн и коммуникации": {
		id: "graphic-design-and-communication",
		entries: {
			"Дизайн журналов": {
				img: "https://static.tildacdn.com/tild6631-3166-4335-b061-303865653439/desidn-magazins.png",
				descripttion: "Дмитрий Гиенко",
			},
			"Мультидисциплинарный дизайн": {
				img: "https://static.tildacdn.com/tild3434-3465-4330-a534-616463333038/design-multimedia.png",
				descripttion: "White Russian",
			},
			"Создание пространства в Adobe Illustrator: инструменты и приемы": {
				img: "https://static.tildacdn.com/tild3836-3461-4665-a138-656337326532/adobe-illustr.png",
				descripttion: "Свят Вишняков",
			},
			"Нелинейная история дизайна": {
				img: "https://static.tildacdn.com/tild6630-6137-4634-a133-343831383437/design-history.png",
				descripttion: "",
			},
			"Основы айдентики: построение визуальной системы": {
				img: "https://static.tildacdn.com/tild6132-3936-4833-b464-656361633131/identic.png",
				descripttion: "Виталий Цыганков",
			},
		},
	},
	"Маркетинг": {
		id: "marketing",
		entries: {
			"Контент-менеджер на маркетплейсах": {
				img: "https://static.tildacdn.com/tild3231-3330-4564-b537-373239626532/marketplaces.png",
				descripttion: "Виктория Комратова, Наталья Чертова, Анастасия Бурындина, Екатерина Коршунова, Марина Ермакова",
			},
			"Креативы в контекстной рекламе": {
				img: "https://static.tildacdn.com/tild3864-6661-4634-b131-663333616234/creatives.png",
				descripttion: "Кирилл Сорокин",
			},
			"CRM-маркетолог": {
				img: "https://static.tildacdn.com/tild3661-3834-4232-b737-326564336465/crm-marketing.png",
				descripttion: "Татьяна Зубкова",
			},
			"Digital-директор": {
				img: "https://static.tildacdn.com/tild3761-3232-4232-b934-653162636564/digital-director.png",
				descripttion: "Андрей Гавриков, Татьяна Таганова, Алексей Добрусин, Ольга Реутова, Юлия Пьянкова, Евгений Летов",
			},
			"Как делать исследования маркетологу": {
				img: "https://static.tildacdn.com/tild3766-6639-4231-b166-386563643138/research.png",
				descripttion: "Андрей Гавриков и Алексей Добрусин",
			},
			"Account based marketing": {
				img: "https://static.tildacdn.com/tild6164-6139-4664-a465-633265643136/abm.png",
				descripttion: "Андрей Гавриков",
			},
			"5 шагов к продающему контент-плану": {
				img: "https://static.tildacdn.com/tild3664-6361-4166-b738-626363323563/content-plan.png",
				descripttion: "Татьяна Таганова и Варвара Бекетова",
			},
		},
	},
};

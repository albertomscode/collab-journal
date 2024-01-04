import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS messageTable (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        message TEXT
    )
`);

db.exec(`
    INSERT INTO messageTable (firstName, message)
    VALUES
    ('Zoehler, Brazil', 'We loved Nicaragua, a secure and beautiful country, especially with the Travel Journey tips.'),
    ('Madison and Kyle, Australia', 'Our trip to Japan was unforgettable, thanks to Travel Journey''s detailed guides. We explored hidden gems in Tokyo and Kyoto that we would never have found on our own!'),
    ('Aarav and Priya, India', 'Travel Journey made our dream Italian vacation come true. The restaurant recommendations in Rome were spot-on - best pasta we''ve ever had!'),
    ('Sienna, United Kingdom', 'Iceland''s natural beauty was breathtaking, and Travel Journey''s tips for off-the-beaten-path hikes were invaluable. We felt like true adventurers!'),
    ('Maxime, France', 'Exploring the Canadian Rockies was a breeze with Travel Journey. Their tailored itinerary made sure we didn''t miss a thing in Banff and Jasper!'),
    ('The Johnson Family, USA', 'Thanks to Travel Journey, our family had the best time in New Zealand. The kids loved the Hobbiton tour and we adored the vineyards!'),
    ('Fatima and Omar, UAE', 'Travel Journey''s insights into Moroccan culture enhanced our experience in Marrakech. The guided tour suggestions were excellent!'),
    ('Sofia and Diego, Argentina', 'Our honeymoon in Bali was magical, all thanks to Travel Journey''s romantic getaway recommendations. Sunset at Uluwatu will always be in our hearts!'),
    ('Wei, China', 'The historical tour suggestions in Egypt from Travel Journey were phenomenal. Seeing the pyramids and learning about ancient history was a dream come true!'),
    ('James and Sarah, Canada', 'Travel Journey helped us navigate the vibrant streets of Rio during Carnival. Their safety tips and event guides were incredibly helpful!'),
    ('Nia, Kenya', 'Discovering the wildlife in South Africa was a life-changing experience. Travel Journey''s safari tips made our adventure both safe and exhilarating!')
`);

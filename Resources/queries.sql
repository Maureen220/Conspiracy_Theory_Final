--Below are a few of the potential joins one can make in SQL once the data has been loaded from the file <database_connection_to_machine_model.ipynb>

--Here is the code for combining all the tables into one table
SELECT ts.totalscore,
	et.et,
	gs.global_conspiracies, 
	gm.government_malfeasance, 
	pw.personal_wellbeing, 
	co.control_of_info, 
	ts.education, 
	ts.urban, 
	ts.gender, 
	ts.engnat, 
	ts.age, 
	ts.hand, 
	ts.religion, 
	ts.orientation, 
	ts.race,
	ts.voted, 
	ts.married, 
	ts.familysize
INTO all_combined_table
FROM control_of_info as co
LEFT JOIN total_score as ts
	ON co.index = ts.index
LEFT JOIN et as et
	ON et.index = ts.index
LEFT JOIN global_conspiracies as gs
	ON gs.index = ts.index
LEFT JOIN government_malfeasance as gm
	ON gm.index = ts.index
LEFT JOIN personal_wellbeing as pw
	ON pw.index = ts.index;

--combining the control_of_info and total_score tables
SELECT ts.totalscore,
	co.control_of_info, 
	ts.education, 
	ts.urban, 
	ts.gender, 
	ts.engnat, 
	ts.age, 
	ts.hand, 
	ts.religion, 
	ts.orientation, 
	ts.race,
	ts.voted, 
	ts.married, 
	ts.familysize
INTO control_totalscore_table
FROM control_of_info as co
LEFT JOIN total_score as ts
ON co.index = ts.index;

DROP TABLE control_totalscore_table;

--combining the et (extreaterrestrial) and total_score tables
SELECT ts.totalscore,
	et.et, 
	ts.education, 
	ts.urban, 
	ts.gender, 
	ts.engnat, 
	ts.age, 
	ts.hand, 
	ts.religion, 
	ts.orientation, 
	ts.race,
	ts.voted, 
	ts.married, 
	ts.familysize
INTO et_totalscore_table
FROM et as et
LEFT JOIN total_score as ts
ON et.index = ts.index;

DROP TABLE et_totalscore_table;

--combining the global_conspiracies and total_score tables
SELECT ts.totalscore,
	gs.global_conspiracies, 
	ts.education, 
	ts.urban, 
	ts.gender, 
	ts.engnat, 
	ts.age, 
	ts.hand, 
	ts.religion, 
	ts.orientation, 
	ts.race,
	ts.voted, 
	ts.married, 
	ts.familysize
INTO gs_totalscore_table
FROM global_conspiracies as gs
LEFT JOIN total_score as ts
ON gs.index = ts.index;

DROP TABLE gs_totalscore_table;

--combining the government_malfeasance and total_score tables
SELECT ts.totalscore,
	gm.global_conspiracies, 
	ts.education, 
	ts.urban, 
	ts.gender, 
	ts.engnat, 
	ts.age, 
	ts.hand, 
	ts.religion, 
	ts.orientation, 
	ts.race,
	ts.voted, 
	ts.married, 
	ts.familysize
INTO gm_totalscore_table
FROM government_malfeasance as gm
LEFT JOIN total_score as ts
ON gm.index = ts.index;

DROP TABLE gm_totalscore_table;

--combining the personal_wellbeing and total_score tables
SELECT ts.totalscore,
	pw.personal_wellbeing, 
	ts.education, 
	ts.urban, 
	ts.gender, 
	ts.engnat, 
	ts.age, 
	ts.hand, 
	ts.religion, 
	ts.orientation, 
	ts.race,
	ts.voted, 
	ts.married, 
	ts.familysize
INTO pw_totalscore_table
FROM personal_wellbeing as pw
LEFT JOIN total_score as ts
ON pw.index = ts.index;

DROP TABLE pw_totalscore_table;
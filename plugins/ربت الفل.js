
global.rpg = {
	
  role(level) {
    level = parseInt(level)
    if (isNaN(level)) return { name: '', level: '' }
    
    const role = [
      { name: "جـنـدي", level: 0 }, { name: "مبـتـدئ", level: 4 }, 
      { name: "مـحـارب", level: 8 }, { name: "مـغـوار", level: 12 }, 
      { name: "فـارس", level: 16 }, { name: "مـغامـر", level: 20 }, 
      { name: "صـيـاد", level: 24 }, { name: "نـينـجا", level: 28 }, 
      { name: "سـاحـر", level: 32 }, { name: "حـكيـم", level: 36 },
      { name: "نـخـبة", level: 48 }, { name: "الساحر الأسود", level: 52 }, 
      { name: "نـائـب مـلـك", level: 56 }, { name: "الـملـك", level: 60 }, 
      { name: "مـلـك", level: 100 }
    ];

    return role.reverse().find(role => level >= role.level)
  }
}


module.exports = `
  0= s.z.z
  1= s.z.(s z)
  2= s.z.(s (s z))
  3= s.z.(s (s (s z)))
  4= s.z.(s (s (s (s z))))
  5= s.z.(s (s (s (s (s z)))))
  6= s.z.(s (s (s (s (s (s z))))))
  7= s.z.(s (s (s (s (s (s (s z)))))))
  8= s.z.(s (s (s (s (s (s (s (s z))))))))
  9= s.z.(s (s (s (s (s (s (s (s (s z)))))))))
  10= s.z.(s (s (s (s (s (s (s (s (s (s z))))))))))
  11= s.z.(s (s (s (s (s (s (s (s (s (s (s z)))))))))))
  12= s.z.(s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))
  13= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))
  14= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))
  15= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))
  16= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))
  17= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))
  18= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))
  19= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))))
  20= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))))
  21= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))))))
  22= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))))))
  23= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))))))))
  24= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))))))))
  25= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))))))))))
  26= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))))))))))
  27= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))))))))))))
  28= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))))))))))))
  29= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))))))))))))))
  30= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))))))))))))))
  31= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z)))))))))))))))))))))))))))))))
  32= s.z.(s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s (s z))))))))))))))))))))))))))))))))
  add= a. b. s. z. (a s (b s z))
  suc= n. s. z. (s (n s z))
  mul= a. b. s. z. (a (b s) z)
  exp= a. b. (b a)
  U= x.(x x)
`;

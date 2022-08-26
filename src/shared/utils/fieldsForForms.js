const fields = {
  form1: {
    insurance_payment: {
      id: "1",
      name: "insurance_payment",
      type: "number",
      required: true,
      label: "Страховий платіж",
      placeholder: "80",
    },
    insurance_amount: {
      id: "2",
      name: "insurance_amount",
      required: true,
      label: "Страхова сума",
      options: [
        { value: 5000, name: "5000" },
        { value: 7000, name: "7000" },
        { value: 10000, name: "10000" },
      ],
    },
  },
  form2: {
    petField1: {
      id: "3",
      name: "petField1",
      type: "text",
      required: true,
      label: "Поле",
      labelRemark: "примітка",
      placeholder: "Поле",
    },
    petField2: {
      id: "4",
      name: "petField2",
      type: "text",
      required: true,
      label: "Поле",
      placeholder: "Поле",
    },
    petField3: {
      id: "5",
      name: "petField3",
      type: "text",
      required: true,
      label: "Поле",
      placeholder: "Поле",
    },
    dateStart: {
      id: "6",
      name: "dateStart",
      type: "date",
      required: true,
      label: "Дата початку",
      placeholder: "ДД / ММ / РР",
    },
    dateFinish: {
      id: "7",
      name: "dateFinish",
      type: "date",
      required: true,
      label: "Дата закінчення",
      placeholder: "ДД / ММ / РР",
    },
  },
  form3: {
    citizenship: {
      id: "8",
      name: "citizenship",
      type: "text",
      required: true,
      label: "Громадянство",
      placeholder: "Громадянство",
      labelRemark: "країна",
    },
    secondName: {
      id: "9",
      name: "secondName",
      type: "text",
      required: true,
      label: "Прізвище",
      placeholder: "Шевченко",
    },
    firstName: {
      id: "10",
      name: "firstName",
      type: "text",
      required: true,
      label: "Ім’я",
      placeholder: "Тарас",
    },
    fathersName: {
      id: "11",
      name: "fathersName",
      type: "text",
      required: false,
      label: "По-батькові",
      placeholder: "Григорович",
    },
    latinFullName: {
      id: "12",
      name: "latinFullName",
      type: "text",
      required: true,
      label: "Прізвище та ім’я",
      placeholder: "Shevchenko Taras",
      labelRemark: "латиницею",
    },
    birthday: {
      id: "13",
      name: "birthday",
      type: "date",
      required: true,
      label: "Дата народження",
    },
    idxCode: {
      id: "14",
      name: "idxCode",
      type: "number",
      required: true,
      label: "Ідентифікаційний код (ІПН)",
      placeholder: "XX-XX-XX-XX-XX",
    },
    phoneNumber: {
      id: "15",
      name: "phoneNumber",
      type: "number",
      required: true,
      label: "Номер мобільного телефону",
      placeholder: "+38 XXX XXX XX XX",
    },
    adress: {
      id: "16",
      name: "adress",
      type: "text",
      required: true,
      label: "Населений пункт",
      placeholder: "Київ, Київська обл., 01001",
    },
    adressArea: {
      id: "17",
      name: "adressArea",
      type: "text",
      required: true,
      label: "Район",
      placeholder: "Шевченківський",
    },
    adressStreet: {
      id: "18",
      name: "adressStreet",
      type: "text",
      required: false,
      label: "Вулиця",
      placeholder: "Хрещатик",
    },
    adressHouse: {
      id: "19",
      name: "adressHouse",
      type: "number",
      required: false,
      label: "Будинок",
      placeholder: "1",
    },
    adressFullLatin: {
      id: "20",
      name: "adressFullLatin",
      type: "text",
      required: false,
      label: "Адреса",
      labelRemark: "латиницею",
      placeholder: "Ukraine, Kyivska obl., Kyiv, Khreshchatyk, 1",
    },
  },
};

export default fields;

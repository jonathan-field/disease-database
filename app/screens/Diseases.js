import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiseaseScreen from "./DiseaseScreen";
import colors from "../config/colors";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { Searchbar } from "react-native-paper";

const Stack = createNativeStackNavigator();

export default function Diseases(props) {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DiseaseHome" component={mainScreen} />
        <Stack.Screen name="DiseaseScreen" component={DiseaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  function mainScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    const DISEASES = [
      {
        title: "A",
        data: [
          "Acute Flaccid Myelitis",
          "AIDS (HIV/AIDS)",
          "Alzheimer’s Disease",
          "Arboviral Encephalitis",
          "Ataxic Disorders",
        ],
        info: [
          {
            summary: [
              "Polio and acute flaccid myelitis (AFM) are illnesses that cause muscle weakness and paralysis (when you’re not able to move). They both typically affect children. Polio is a viral infection that paralyzed more than 15,000 people in the U.S. each year -- mostly children -- in the early 1950s. It’s been wiped out in this country thanks to a vaccine, but it's still a problem in some places, including Nigeria, New Guinea, and Somalia. Doctors don’t know exactly what causes AFM, but many cases seem to be brought on by a viral infection, too. (Researchers aren’t sure how the virus triggers it.) There’s been a small outbreak in the U.S. in recent years, but it’s still very rare. Fewer than 1 in a million children in the U.S. get the disease each year.",
              "HIV is a virus that lives in human blood, sexual fluids, and breast milk. It weakens your immune system, so your body has a hard time fighting off common germs, viruses, fungi, and other invaders. It spreads mainly through unprotected sexual contact and sharing needles. AIDS -- acquired immune deficiency syndrome -- is the condition that comes when your immune system stops working and you get sick because of HIV.",
              "Alzheimer's is a disease that robs people of their memory. At first, people have a hard time remembering recent events, though they might easily recall things that happened years ago. People with Alzheimer's might forget their loved ones. They might forget how to dress themselves, feed themselves, and use the toilet. The disease makes brain tissue break down over time. It usually happens to people over age 65.A person can live with Alzheimer's disease for just a few years or for a few decades. More often, however, people live with it for about 9 years. About 1 in 8 people age 65 and over has the disease. Women are more likely to have it than men.",
              "Arbovirus encephalitis is another form of viral encephalitis. It is caused by various viruses that are carried by insects (such as mosquitoes and ticks). Unlike herpes, arboviral infections are seasonal, occurring primarily in summer and early fall, and are clustered in specific regions, such as in the case of St. Louis encephalitis.",
              "Ataxia is a movement disorder caused by problems in the brain. When you have ataxia, you have trouble moving parts of your body the way you want. Or the muscles in your arms and legs might move when you don’t want them to. The word ataxia actually means “without coordination.” Ataxia isn’t a disorder or a disease itself -- it’s a sign of other underlying disorders or diseases. Doctors have discovered anywhere from 50 to 100 different ataxias. They are grouped into categories based on what causes them, or based on which part of the body they affect.",
            ],
            symptoms: [
              "AFM causes sudden weakness in your arms and legs, along with a loss of muscle tone and sometimes pain. Your face may also feel weak. These symptoms are usually preceded by a runny nose, cough, and congestion. Other symptoms of AFM include:\n- Drooping eyelids and trouble moving your eyes\n- A hard time swallowing or speaking\n- Slurred speech\n- Trouble breathing",
              "In the first few weeks: These first, flu-like symptoms happen because your body is reacting to HIV. Your immune system is trying to fight it off. The symptoms at this stage can include:\n- Fever\n- Headache\n- Upset stomach\n- Sore throat\n- Swollen glands\n- Rash\n- Aches and pains in muscles and joints",
              "- Trouble focusing\n- A hard time doing ordinary activities\n- Feeling confused or frustrated, especially at night\n- Dramatic mood swings -- outbursts of anger, anxiety, and depression\n- Feeling disoriented and getting lost easily\n- Physical problems, such as an odd walk or poor coordination\n- Trouble communicating",
              "The symptoms of encephalitis are usually sudden and severe. They include: \n- Fever\n- Drowsiness, lethargy, and possibly coma\n- Headaches\n- Personality changes, irritability, or emotional outbursts\n- Confusion\n- Weakness in one or more areas of the body\n- Seizures\n- Bulging soft spots in infants",
              "Symptoms of cerebellar ataxia include:\n- Changes in your voice\n- Dizziness\n- Fatigue\n- Headaches\n- Muscle tremors\n- Slurred speech\n- Trouble walking\n- Wide gait\nSymptoms of sensory ataxia include:\n- Difficulty touching your finger to your nose with closed eyes\n- Inability to sense vibrations\n- Trouble walking in dim light\n- Walking with a “heavy step,” or stomping when you walk\nWhen the nerves in your vestibular system are affected, you can have the following problems:\n- Blurred vision and other eye issues\n- Nausea and vomiting\n- Problems standing and sitting\n- Staggering when you walk\n- Trouble walking in a straight line\n- Vertigo, or dizziness",
            ],
            equipment: [
              "There’s no cure for either polio or AFM, but some things can help with symptoms. Children with either polio or AFM may need:\n- Pain relievers like ibuprofen to ease pain and bring down fever\n- Fluids to keep them from being dehydrated\n- A machine called a ventilator to help them breathe Physical therapy to make weak muscles stronger\n- Occupational therapy to help with everyday activities like dressing and eating",
              "It’s important to try to put weight back on. In addition to taking your HIV medications, a few things can help:\n- Talk to a dietitian to make sure your diet is balanced and gives you the calories you need.\n- Build up your muscle mass with workouts like weightlifting or resistance exercises, like pushups, planks, and squats.\n- Try high-protein supplements. (First, ask your doctor or dietitian if you need them.)\n- Treat infections that may cause diarrhea or loss of appetite.\n- Your doctor may prescribe medicines to help with wasting syndrome, called megestrol acetate (Megace) and dronabinol (Marinol). ",
              "- Donepezil (Aricept)\n- Galantamine (Razadyne, Razadyne ER, Reminyl)\n- Rivastigmine (Exelon)",
              "Because complications from encephalitis can be serious, the condition requires hospitalization. Treatment will depend largely on your age and condition, as well as the form and cause of the disease. If encephalitis is caused by a bacterial infection, it can be treated with intravenous antibiotics. Treatment for herpes-related encephalitis includes supportive care, as well as intravenous antiviral therapy with a drug such as acyclovir. Other treatments may be used to lower fever, provide hydration, treat seizures if they develop, and reduce any pressure in the skull. With proper care, most people recover from encephalitis. Infants and elderly people are at greater risk of permanent brain damage.",
              "The best treatment for your ataxia symptoms depends on the type you have. There is no specific treatment for ataxia itself. If your ataxia is a symptom of another disorder, your doctor will treat that disorder. If it’s due to a cause that you can avoid, like lack of vitamins or exposure to poison, your doctor will help you address the problem causing the ataxia. In order to help you cope with your symptoms, your doctor may recommend:\n- Counseling\n- Physical or occupational therapy\n- Speech therapy\n- Support groups\nYour doctor can also help you find tools so you can move around easier, such as a cane or a walker. There are also utensils to help you eat and speak more easily.",
            ],
            relatedDiseases: [
              "- Polio",
              "- Anal cancer.\n- Candidiasis (thrush).\n- Coccidioidomycosis.\n- Cryptococcosis.\n- Cryptosporidiosis.\n- Cytomegalovirus.\n- Herpes simplex.\n- Herpes zoster (shingles)",
              "- Chronic Traumatic Encephalopathy (CTE)\n- Mild Cognitive Impairment (MCI)\n- Traumatic Brain Injury (TBI)",
              "- Zika\n- West Nile Virus (WNV)\n- St. Louis Encephalitis (SLE)\n- Eastern Equine Encephalitis (EEE)\n- Western Equine Encephalitis (WEE)",
              "- Spinocerebellar Ataxia\n- Episodic ataxia",
            ],
          },
        ],
      },
      {
        title: "B",
        data: [
          "Babesiosis",
          "Bacterial Vaginosis",
          "Bartonella Infection",
          "Bilharzia",
          "Bird Flu",
          "Blue-green Algae",
        ],
        info: [
          {
            summary: [
              "Babesiosis is a rare and life-threatening infection of the red blood cells that's usually spread by ticks. It's caused by tiny parasites called Babesia. The kind that most often affects humans is called Babesia microti. They enter your bloodstream when you're bitten by an infected deer tick. Other ways babesiosis can spread include:\n- Contaminated blood transfusions\n- A pregnant, infected mother passing it to their baby in the womb or during birth\nBabesiosis usually happens in the warmer months.",
              "Bacterial vaginosis (BV) is an infection of the vagina. It results from a change in the normal balance of vaginal bacteria. BV usually doesn't cause any other health problems. But it can lead to issues, especially when you're pregnant or trying to get pregnant.",
              "Cat-scratch fever is an infection caused by a kind of bacteria called Bartonella henselae (it's also sometimes called Bartonella henselae infection). You can get it if a cat that has this type of bacteria licks an open wound on your skin or bites or scratches you. Cat-scratch fever, also called Cat-scratch disease (CSD), happens most often in children and teens.",
              "Schistosomiasis, also known as bilharzia (bill-HAR-zi-a), is a disease caused by parasitic worms. Infection with Schistosoma mansoni, S. haematobium, and S. japonicum causes illness in humans. Although schistosomiasis is not found in the United States, 200 million people are infected worldwide. Infection occurs when your skin comes in contact with contaminated fresh water in which certain types of snails that carry schistosomes are living. Fresh water becomes contaminated by Schistosoma eggs when infected people urinate or defecate in the water. The eggs hatch, and if certain types of snails are present in the water, the parasites grow and develop inside the snails. The parasite leaves the snail and enters the water where it can survive for about 48 hours. Schistosoma parasites can penetrate the skin of persons who are wading, swimming, bathing, or washing in contaminated water. Within several weeks, worms grow inside the blood vessels of the body and produce eggs. Some of these eggs travel to the bladder or intestines and are passed into the urine or stool.",
              "Bird flu, or avian influenza, is a viral infection spread from bird to bird. The most common kind of bird flu is the H5N1 strain. It's mostly a threat to birds and doesn’t spread easily among people, but there was a major outbreak of bird flu in people in 2014. The very few cases of human-to-human transmission were among people with exceptionally close contact, such as a mother who caught the virus while caring for their sick infant. Migrating water fowl -- most notably wild ducks -- are the natural carriers of bird flu viruses. Scientists suspect that infection can spread from wild fowl to domestic poultry.",
              "Blue-green algae are a group of bacteria. They can be used as a source of protein, but contain no more protein than meat or milk. Blue-green algae produce blue-green colored pigments and are high in protein, iron, and other minerals. They grow in saltwater and some large freshwater lakes. They have been used for food for several centuries in Mexico and some African countries. In the US, they've been sold in supplements since the late 1970s. People use blue-green algae for treating high blood pressure and as a protein supplement. It's also used for high levels of cholesterol or other fats (lipids) in the blood, diabetes, obesity, and many other conditions. But there is no good scientific evidence to support these other uses. Some blue-green algae products are grown under controlled conditions. Others are grown in a natural setting, where they're more likely to be contaminated. Only use products that have been tested and are free of contaminants such as heavy metals, liver toxins called microcystins, and harmful bacteria. Don't confuse blue-green algae with other algaes, like Ascophyllum nodosum, Ecklonia cava, Fucus Vesiculosis, or Laminaria.",
            ],
            symptoms: [
              "Signs of babesiosis start 1 to 8 weeks after you come in contact with the parasite that causes the disease. Sometimes you won't notice any symptoms. If you do, they might include:\n- Body aches\n- Chills\n- Fatigue\n- Fever\n- Headache\n- Loss of appetite\n- Sweating\nYou also can get a condition called hemolytic anemia in which your red blood cells die faster than your body can make new ones. Symptoms of this can include:\n- Confusion\n- Dark-colored urine\n- Dizziness\n- Heart murmur\n- Rapid heart rate\n- Swelling of your spleen and liver\n- Very pale skin\n- Weakness\n- Yellow skin, eyes, and mouth (jaundice)",
              "About half of the time, women with BV have no symptoms. But they can include:\n- Burning feeling when you pee\n- Fishy smell that gets stronger after sex\n- Itching\n- Thin white, gray, or green discharge",
              "The first sign is often a red bump, sore, or blister at the site of the scratch or bite. This may not hurt, but it often has a crust and could contain pus. Within the next 2 weeks -- and even after the bump has healed -- you could have:\n- Fever (could be “low grade,” meaning less than 102 F)\n- Headache\n- Fatigue (feeling very tired)\n- Poor appetite\n- Swollen glands (lymph nodes)\n The lymph nodes that swell are often near the infected area. For instance, if a cat bit your arm, the glands in your armpit could swell or fill with pus. In very rare cases, CSD causes serious problems that affect your bones, joints, eyes, brain, heart, or other organs. These are most likely to happen in children younger than 5 years old or people who have a weakened immune system.",
              "Within days after becoming infected, you may develop a rash or itchy skin. Fever, chills, cough, and muscle aches can begin within 1-2 months of infection. Most people have no symptoms at this early phase of infection. Eggs travel to the liver or pass into the intestine or bladder. Rarely, eggs are found in the brain or spinal cord and can cause seizures, paralysis, or spinal cord inflammation. For people who are repeatedly infected for many years, the parasite can damage the liver, intestines, lungs, and bladder.",
              "Bird flu symptoms in people can vary. The illness could start out with flu-like symptoms that include fever, cough, sore throat, and muscle aches. But it may worsen to include: \n- Gut problems: Nausea, belly pain, diarrhea, and vomiting.\n- Breathing problems: Shortness of breath, serious  respiratory distress or failure, pneumonia, and other respiratory diseases.\n- Brain or nervous system changes: You might notice shifts in behavior, thinking, or even organ function. Seizures are possible in serious cases.",
              "Side effects are typically mild and may include nausea, vomiting, diarrhea, headache, and dizziness. But blue-green algae products that are contaminated are possibly unsafe. Contaminated blue-green algae can cause liver damage, vomiting, weakness, rapid heartbeat, shock, and death. Don't use any blue-green algae product that hasn't been tested and found to be free of microcystins and other contaminants.",
            ],
            equipment: [
              "If you don't have any symptoms, you probably won't need treatment. If you do, your doctor may prescribe  a drug called atovaquone that kills microorganisms along with the antibiotic  azithromycin.  Another combination they may recommend are quinine with the antibiotic clindamycin.",
              "The doctor can prescribe antibiotics (metronidazole, clindamycin, tinidazole) to treat BV. This could be a tablet you take by mouth or a cream or gel you put into your vagina. You'll need to take most treatments for 5 to 7 days. Finish all your medicine, even if the symptoms go away. If you stop early, the infection could come back.",
              "For people in good health, CSD will likely go away without treatment. Until it does, you can take an over-the-counter anti-inflammatory medicine like ibuprofen (Advil, Motrin, Nuprin) or naproxen (Aleve, Anaprox, Naprosyn) sodium to ease swelling and pain. A hot compress can help, too. To relieve very tight, painful glands, your doctor may gently insert a needle into them and drain the fluid. If you have problems with your immune system or your symptoms haven’t gone away in 2 months, your doctor will likely prescribe antibiotics. This can prevent the infection from spreading to other places in your body, like your liver or bones. You may need to take this medicine for several months.",
              "Safe and effective drugs are available for the treatment of schistosomiasis. You will be given pills to take for 1-2 days.",
              "The flu drugs oseltamivir (Tamiflu), peramivir (Rapivab), or zanamivir (Relenza) may help treat bird flu in people, although more studies are needed. These drugs must be given soon after symptoms appear.",
              "Blue-green algae can be a challenge in lake and pond management. We see it from time to time in North Carolina, especially in the summer. Blue-green algae includes several different species of photosynthetic cyanobacteria that live throughout the water column. These types of algae can rapidly reproduce and form blooms that are visible on the surface of lakes and ponds as surface “scum”. Water bodies with little to no flow are particularly high at risk for blue-green algal blooms. The causes of blue-green algae blooms are not fully understood, but they are generally related to nitrogen and phosphorus concentrations in the water, as well as environmental factors such as hot, sunny, and dry weather with little wind. Clear water, low turbidity, allows for deeper penetration of sunlight, and thus can also be another contributing factor to algal blooms. Among other reasons, unpredictable weather conditions make it difficult to proactively treat for this type of algae.",
            ],
            relatedDiseases: [
              "- Borrelia miyamotoi Disease\n- Colorado Tick Fever\n- Ehrlichiosis\n- Anaplasmosis",
              "- Trichomoniasis\n- Yeast Infection",
              "- Carrión's disease",
              "- Paragonimiasis\n- Taeniasis\n- Fascioliasis",
              "- Swine Flu\n- Dog Flu\n- Horse Flu",
              "- Microcystin\n- Nodularin\n- Cylindrospermopsin\n- Anatoxin-a\n- Anatoin-a(s)\n- Lyngbyatoxin\n- Saxitoxins",
            ],
          },
        ],
      },
      {
        title: "C",
        data: [
          "Cancer",
          "Cancer - Bladder",
          "Cancer - Breast",
          "Cancer - Cervical",
          "Choreiform disorders",
        ],
        info: [
          {
            summary: [
              "Cancer, also called malignancy, is an abnormal growth of cells. There are more than 100 types of cancer, including breast cancer, skin cancer, lung cancer, colon cancer, prostate cancer, and lymphoma. Symptoms vary depending on the type. Cancer treatment may include chemotherapy, radiation, and/or surgery.",
              "Bladder cancer starts when cells that make up the urinary bladder start to grow out of control. As more cancer cells develop, they can form a tumor and, with time, spread to other parts of the body. (To learn more about how cancers start and spread, see What Is Cancer?). The bladder is a hollow organ in the lower pelvis. It has flexible, muscular walls that can stretch to hold urine and squeeze to send it out of the body. The bladder's main job is to store urine. Urine is liquid waste made by the 2 kidneys and then carried to the bladder through 2 tubes called ureters. When you urinate, the muscles in the bladder contract, and urine is forced out of the bladder through a tube called the urethra.",
              "Breast cancer is cancer that forms in the cells of the breasts. After skin cancer, breast cancer is the most common cancer diagnosed in women in the United States. Breast cancer can occur in both men and women, but it's far more common in women. Substantial support for breast cancer awareness and research funding has helped created advances in the diagnosis and treatment of breast cancer. Breast cancer survival rates have increased, and the number of deaths associated with this disease is steadily declining, largely due to factors such as earlier detection, a new personalized approach to treatment and a better understanding of the disease.",
              "Cervical cancer is a type of cancer that occurs in the cells of the cervix — the lower part of the uterus that connects to the vagina. Various strains of the human papillomavirus (HPV), a sexually transmitted infection, play a role in causing most cervical cancer. When exposed to HPV, the body's immune system typically prevents the virus from doing harm. In a small percentage of people, however, the virus survives for years, contributing to the process that causes some cervical cells to become cancer cells. You can reduce your risk of developing cervical cancer by having screening tests and receiving a vaccine that protects against HPV infection.",
              "",
            ],
            symptoms: [
              "- Pain. Bone cancer often hurts from the beginning. Some brain tumors cause headaches that last for days and don’t get better with treatment. Pain can also be a late sign of cancer, so see a doctor if you don't know why it’s happening or it doesn’t go away.\n- Weight loss without trying. Almost half of people who have cancer lose weight. It’s often one of the signs that they notice first.\n- Fatigue. If you’re tired all the time and rest doesn’t help, tell your doctor. Leukemia often wears you out, or you could have blood loss from colon or stomach cancer. Cancer-related weight loss can leave you exhausted, too.\n- Fever. If it’s high or lasts more than 3 days, call your doctor. Some blood cancers, like lymphoma, cause a fever for days or even weeks.\n- Changes in your skin. Have your doctor look at unusual or new moles, bumps, or marks on your body to be sure skin cancer isn’t lurking. Your skin can also provide clues to other kinds of cancers. If it’s darkened, looks yellow or red, itches, or sprouts more hair, or if you have an unexplained rash, it could be a sign of liver, ovarian, or kidney cancer or lymphoma.\n- Sores that don’t heal. Spots that bleed and won’t go away are also signs of skin cancer. Oral cancer can start as sores in your mouth. If you smoke, chew tobacco, or drink a lot of alcohol, you’re at higher risk.\n- Cough or hoarseness that doesn’t go away. A cough is one sign of lung cancer, and hoarseness may mean cancer of your voice box (larynx) or thyroid gland.\n- Unusual bleeding. Cancer can make blood show up where it shouldn’t be. Blood in your poop is a symptom of colon or rectal cancer. And tumors along your urinary tract can cause blood in your urine.\n- Anemia. This is when your body doesn’t have enough red blood cells, which are made in your bone marrow. Cancers like leukemia, lymphoma, and multiple myeloma can damage your marrow. Tumors that spread there from other places might crowd out regular red blood cells.",
              "- Blood in the urine\n- Changes in bladder habits or symptoms of irritation\n- Symptoms of advanced bladder cancer",
              "- Trouble focusing\n- A hard time doing ordinary activities\n- Feeling confused or frustrated, especially at night\n- Dramatic mood swings -- outbursts of anger, anxiety, and depression\n- Feeling disoriented and getting lost easily\n- Physical problems, such as an odd walk or poor coordination\n- Trouble communicating",
              "- Vaginal bleeding after intercourse, between periods or after menopause\n- Watery, bloody vaginal discharge that may be heavy and have a foul odor\n- Pelvic pain or pain during intercourse",
              "",
            ],
            equipment: [
              "- Surgery\n- Chemotherapy\n- Radiation\n- Targeted therapy\n- Immunotherapy\n- Hormone therapy\n- Stem cell transplants\n- Photodynamic therapy",
              "Many times, the best option might include more than one of type of treatment. Surgery, alone or with other treatments, is used to treat most bladder cancers. Early-stage bladder tumors can often be removed. But a major concern in people with early-stage bladder cancer is that new cancers often form in other parts of the bladder over time. Taking out the entire bladder (called radical cystectomy) is one way to avoid this, but it causes major side effects. If the entire bladder is not removed, other treatments may be used to try to reduce the risk of new cancers. Whether or not other treatments are given, close follow-up is needed to watch for signs of new cancers in the bladder.",
              "Some treatments are local, meaning they treat the tumor without affecting the rest of the body. Most women with breast cancer will have some type of surgery to remove the tumor. Depending on the type of breast cancer and how advanced it is, you might need other types of treatment as well, either before or after surgery, or sometimes both.",
              "Depending on the type and stage of your cancer, you may need more than one type of treatment. For the earliest stages of cervical cancer, either surgery or radiation combined with chemo may be used. For later stages, radiation combined with chemo is usually the main treatment. Chemo (by itself) is often used to treat advanced cervical cancer.",
              "",
            ],
            relatedDiseases: [
              "- Breast Cancer\n- Bladder Cancer\n- Cervical Cancer",
              "- Squamous cell carcinoma\n- Adenocarcinoma\n- Small cell carcinoma\n- Sarcoma",
              "- Lymphedema\n- Osteopenia\n- Osteoporosis\n- Heart disease",
              "- HPV related cancers",
              "",
            ],
          },
        ],
      },
      {
        title: "D",
        data: ["Dystonic disorders"],
        info: [
          {
            summary: [""],
            symptoms: [""],
            equipment: [""],
            relatedDiseases: [""],
          },
        ],
      },
      {
        title: "E",
        data: ["Essential hypertension"],
        info: [
          {
            summary: [""],
            symptoms: [""],
            equipment: [""],
            relatedDiseases: [""],
          },
        ],
      },
      {
        title: "H",
        data: [
          "Hypertensive Crisis",
          "Hypertensive Heart Disease",
          "Hypertensive Renal Disease",
        ],
        info: [
          {
            summary: [
              "",
              "Hypertensive heart disease is the No. 1 cause of death associated with high blood pressure. It refers to a group of disorders that includes heart failure, ischemic heart disease, and left ventricular hypertrophy (excessive thickening of the heart muscle).",
              "",
            ],
            symptoms: [
              "",
              "Symptoms of heart failure include:\n- Shortness of breath\n- Swelling in the feet, ankles, or abdomen\n- Difficulty sleeping flat in bed\n- Bloating\n- Irregular pulse\n- Nausea\n- Fatigue\n- Greater need to urinate at night\nSymptoms of ischemic heart disease may include:\n- Chest pain which may radiate (travel) to the arms, back, neck, or jaw\n- Chest pain with nausea, sweating, shortness of breath, and dizziness; these associated symptoms may also occur without chest pain\n- Irregular pulse\n- Fatigue and weakness\nYour doctor will look for certain signs of hypertensive heart disease, including:\n- High blood pressure\n- Enlarged heart and irregular heartbeat\n- Fluid in the lungs or lower extremities\n- Unusual heart sounds",
              "",
            ],
            equipment: [
              "",
              "In order to treat hypertensive heart disease, your doctor has to treat the high blood pressure that is causing it. They will treat it with a variety of drugs, including diuretics, beta-blockers, ACE inhibitors, calcium channel blockers, angiotensin receptor blockers, and vasodilators. In addition, your doctor may advise you to make changes to your lifestyle, including:\n- Diet\n- Monitoring your weight\n- Avoiding tobacco products and alcohol\n- regular medical checkups",
              "",
            ],
            relatedDiseases: [
              "",
              "- Atrial Fibrillation\n- Congestive Heart Failure\n- Coronary Artery Disease",
              "",
            ],
          },
        ],
      },
      {
        title: "M",
        data: ["Melanosis Coli", "Myoclonic Disorders"],
        info: [
          {
            summary: [
              "Melanosis coli (MC) is a common condition characterized by a black or brown pigment deposited in the colorectal mucosa. It is a reversible condition that is influenced by many factors, such as living habits and bowel function. However, the epidemiology and etiology of MC are still unclear. Most studies show that there is a significant correlation between the use of anthraquinone laxatives and the occurrence of MC. At present, the mechanism of the apoptosis theory is widely recognized as regards the pathogenesis of MC. There is no specific clinical manifestation of MC, and its diagnosis is mainly based on a complimentary examination, such as endoscopic and histopathological tests. General treatment, such as changing living habits, is preferred, and medical or surgical treatment should not be considered in the absence of serious malignancy. The aim of this review is to systematically present and outline the concepts of the epidemiology, etiology, histopathology, pathogenesis, clinical manifestations, diagnosis and treatment of MC, in order to improve the understanding of this condition.",
              "",
            ],
            symptoms: ["Produces no symptoms", ""],
            equipment: ["There is no treatment for melanosis coli.", ""],
            relatedDiseases: ["Other harmless diseases", ""],
          },
        ],
      },
      {
        title: "N",
        data: ["Neonatal Hypertension"],
        info: [
          {
            summary: [""],
            symptoms: [""],
            equipment: [""],
            relatedDiseases: [""],
          },
        ],
      },
      {
        title: "P",
        data: [
          "Parkinson Disease",
          "Polyposis Syndrome",
          "Polyp of Large Intestine",
        ],
        info: [
          {
            summary: [
              "Parkinson’s disease affects the nerve cells in the brain that produce dopamine. Parkinson’s disease symptoms include muscle rigidity, tremors, and changes in speech and gait. After diagnosis, treatments can help relieve symptoms, but there is no cure.",
              "",
              "Colon polyps are growths on the lining of your colon or large intestine, part of your digestive tract. Most of them aren’t harmful. But some can turn into colon cancer over time. For that reason, your doctor needs to take out any colon polyps you have.",
            ],
            symptoms: [
              "Parkinson's disease is a movement disorder that progresses slowly. Some people will first notice a sense of weakness, difficulty walking, and stiff muscles. Others may notice a tremor of the head or hands. Parkinson's is a progressive disorder and the symptoms gradually worsen. The general symptoms of Parkinson's disease include:\n- Slowness of voluntary movements, especially in the initiation of such movements as walking or rolling over in bed\n- Decreased facial expression, monotonous speech, and decreased eye blinking\n- A shuffling gait with poor arm swing and stooped posture\n- Unsteady balance; difficulty rising from a sitting position\n- Continuous pill-rolling motion of the thumb and forefinger\n- Abnormal tone or stiffness in the trunk and extremities\n- Swallowing problems in later stages\n- Lightheadedness or fainting when standing (orthostatic hypotension)",
              "",
              "Most colon polyps don’t cause symptoms. You probably won’t know you have one unless a test finds it. If you do have signs, they can include:\n- Blood in your poop, in the toilet bowl, or on toilet paper when you wipe. These could be signs of bleeding inside your colon.\n- A bowel movement that's black or has red streaks, which may mean there’s blood in it\n- Constipation or diarrhea that lasts longer than a week\n- Belly pain\n- Fatigue or shortness of breath. These can be signs that your body doesn’t have enough iron, which can happen if polyps bleed.",
            ],
            equipment: [
              "If you have Parkinson's disease, you have a lot of choices for treatment. There's no cure, but medicine and sometimes surgery can help. Medicine can often keep your symptoms in check for years. Your doctor may suggest you try one of these drugs: Levodopa. You may hear your doctor call this this L-dopa. It's a drug that doctors prescribe most often for Parkinson's. When you have Parkinson's, your brain gradually stops making dopamine -- a chemical that helps send signals in your brain. Levodopa may improve your symptoms because it is converted to dopamine in the brain. To curb nausea and other possible side effects from levodopa, doctors usually suggest you take a drug called carbidopa along with it. It comes as a combination drug containing both medicines. Examples include: Duopa, Rytary and Sinemet. Rarely, some people can't handle carbidopa and need to take levodopa alone. If that's the case for you, it's important not to take it at the same time as food or vitamins that have vitamin B6, which can affect how well your medicine works.",
              "",
              "During a colonoscopy or flexible sigmoidoscopy, your doctor uses forceps or a wire loop to remove polyps. This is called a polypectomy. If the polyp is too large to take out this way, you may need surgery to remove it. Once it’s out, a pathologist tests it for cancer. If you have a genetic condition like familial adenomatous polyposis, your doctor may recommend surgery to remove part or all of your colon and rectum. That’s the best way to prevent colon cancer for people with these health problems. If you have colon polyps, there’s a good chance you’ll get more of them later on. Your doctor will recommend that you have more screening tests later on.",
            ],
            relatedDiseases: [
              "- Supranuclear Palsy (PSP)\n- Multiple System Atrophy (MSA)\n- Lewy Body Disease (LBD)",
              "",
              "- Familial Adenomatous Polyposis\n- Gardner's Syndrome\n- Crohn's Disease",
            ],
          },
        ],
      },
      {
        title: "S",
        data: ["Secondary Hypertension"],
        info: [
          {
            summary: [
              "High blood pressure, also known as hypertension, is classified as essential (primary) or secondary. Essential hypertension does not have an apparent cause. It may be due to such things as family history or lifestyle. Most people with high blood pressure have essential hypertension. Secondary hypertension, which happens in about 10% of people with high blood pressure, is less common and is the result of another condition, such as:\n- Disorders of the adrenal gland (small organs, located above the kidneys, that create hormones), including Cushing's syndrome (a condition caused by an overproduction of cortisol); hyperaldosteronism (too much aldosterone); and pheochromocytoma (a rare tumor that causes oversecretion of hormones like adrenaline)\n- Kidney disease, which may include polycystic kidney disease, kidney tumor, kidney failure, or a narrow or blocked main artery supplying the kidney Drugs such as corticosteroids (anti-inflammatory drugs like prednisone), nonsteroidal anti-inflammatory drugs (Motrin, Aleve, Naprosyn, Celebrex), weight loss drugs (such as phentermine), cold medications that include decongestants such as pseudoephedrine, birth control pills (the estrogen component), and migraine medications (such as Imitrex).\n- Sleep apnea, a condition in which a person has brief spells in which they stop breathing during sleep; about half of patients with this condition have high blood pressure.\n- Coarctation of the aorta, a birth defect in which the aorta is narrowed\n- Preeclampsia, a condition related to pregnancy\n- Thyroid and parathyroid problems",
            ],
            symptoms: [
              "If you've been diagnosed with high blood pressure, having any of these signs may mean your condition is secondary hypertension:\n- High blood pressure that doesn't respond to blood pressure medications (resistant hypertension)\n- Very high blood pressure — systolic blood pressure over 180 millimeters of mercury (mm Hg) or diastolic blood pressure over 120 mm Hg\n- High blood pressure that no longer responds to medication that previously controlled your blood pressure\n- Sudden-onset high blood pressure before age 30 or after age 55\n- No family history of high blood pressure\n- No obesity",
            ],
            equipment: [
              "In order to treat secondary hypertension, your doctor will address the underlying condition or disorder. When the root cause of secondary hypertension is treated, blood pressure usually lowers or returns to normal. In cases where narrowed arteries are the cause of high blood pressure (coarctation, narrowed kidney arteries) you may need surgery. Your doctor may also choose to treat you with blood pressure drugs in addition to addressing the underlying health issues.",
            ],
            relatedDiseases: [
              "- Cardiovascular Disease\n- Renovascular Hypertension\n- Essential Hypertension",
            ],
          },
        ],
      },
      {
        title: "T",
        data: ["Tic Disorders"],
        info: [
          {
            summary: [""],
            symptoms: [""],
            equipment: [""],
            relatedDiseases: [""],
          },
        ],
      },
    ];
    /*
  const state = { 

        name: "Acute Flaccid Myelitis (AFM)",
        info: [
          {
            description: "This disease is bad",
          },
        ],
    ],
  };
  */
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={[
            colors.backgroundtop,
            colors.backgroundmiddle,
            colors.backgroundbottom,
          ]}
          style={styles.background}
        />

        <View style={styles.contentBackground}>
          <MaskedView
            maskElement={
              <LinearGradient
                colors={["black", "black", "transparent"]}
                start={{ x: 0.5, y: 0.87 }}
                style={{ flex: 1 }}
              />
            }
          >
            <View style={styles.contentBackground2}>
              {/* <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                theme={{
                  colors: {
                    placeholder: "gray",
                    text: "black",
                    primary: "#007AFF",
                  },
                }}
                style={styles.searchBar}
              /> */}
              <SectionList
                style={styles.sectionList}
                sections={DISEASES}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index, section }) => (
                  <TouchableOpacity
                    onPress={() => {
                      // console.log(
                      //   "Summary of " +
                      //     item +
                      //     " is the following " +
                      //     DISEASES[
                      //       DISEASES.findIndex(function (disease) {
                      //         return disease.title === section.title;
                      //       })
                      //     ].info[0].summary[index]
                      // ),
                      navigation.navigate("DiseaseScreen", {
                        title: item,
                        summary:
                          DISEASES[
                            DISEASES.findIndex(function (disease) {
                              return disease.title === section.title;
                            })
                          ].info[0].summary[index],
                        equipment:
                          DISEASES[
                            DISEASES.findIndex(function (disease) {
                              return disease.title === section.title;
                            })
                          ].info[0].equipment[index],
                        relatedDiseases:
                          DISEASES[
                            DISEASES.findIndex(function (disease) {
                              return disease.title === section.title;
                            })
                          ].info[0].relatedDiseases[index],
                        symptoms:
                          DISEASES[
                            DISEASES.findIndex(function (disease) {
                              return disease.title === section.title;
                            })
                          ].info[0].symptoms[index],
                      });
                      // console.log(
                      //   "Disease title index is: " +
                      //     DISEASES.findIndex(function (disease) {
                      //       return disease.title === section.title;
                      //     })
                      // );
                      // console.log("index is " + index);
                      // console.log("Title of disease is " + item);
                      // console.log("Disease title touched " + section.title);
                      // console.log(
                      //   "To display summary of Flaccid" +
                      //     DISEASES[0].info[0].summary[0]
                      // );
                    }}
                  >
                    <Text style={styles.item}>{item}</Text>
                  </TouchableOpacity>
                )}
                renderSectionHeader={({ section }) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={(item, index) => index}
                ItemSeparatorComponent={(props) => {
                  //console.log("props", props); // here you can access the trailingItem with props.trailingItem
                  return (
                    <View
                      style={{
                        height: 1,
                        width: "96%",
                        backgroundColor: "#EBEBEB",
                        alignSelf: "center",
                      }}
                    />
                  );
                }}
              />
            </View>
          </MaskedView>
        </View>

        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    zIndex: -10,
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  contentBackground: {
    marginTop: 43,
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 500,
    width: "95%",
    height: "93%",
  },
  contentBackground2: {
    borderRadius: 10,
    height: 500,
    width: "100%",
    height: "100%",
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    width: "90%",
    height: 40,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: "center",
  },
  sectionList: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    color: "#323232",
    backgroundColor: "#F1F1F1",
  },
  item: {
    padding: 10,
    paddingLeft: 15,
    fontSize: 18,
    height: 44,
    fontFamily: "Inter_500Medium",
  },
  linearGradient: {
    width: 75,
    height: 75,
  },
});

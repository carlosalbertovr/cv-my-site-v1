import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";
import experience from "@data/experience.json";
import education from "@data/education.json";
import contact from "@data/contact.json";
import social from "@data/social.json";
import skills from "@data/skills.json";
import technologies from "@data/technologies.json";
import avatar from "@assets/avatar.png";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Times-Roman",
    lineHeight: 1.5,
  },
  headerStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    borderBottom: "1px solid black",
    paddingBottom: 2,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2,
    marginTop: 5,
  },
  bold: { fontWeight: "bold" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  item: { marginBottom: 6 },
  list: { marginLeft: 10 },
  small: { fontSize: 9 },
});

function formatDate(dateStr: string) {
  if (dateStr === "Present") return "Present";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month}. ${year}`;
}

export function Resume() {
  const techMap: { [key: string]: string } = {};
  technologies.forEach((tech) => {
    techMap[tech.id] = tech.title;
  });

  const linkedinUrl = social.find((s) => s.id === "linkedin")?.url || "";
  const location = contact.find((c) => c.label === "Location")?.text || "";
  const email = contact.find((c) => c.label === "Email")?.text || "";
  const phone = contact.find((c) => c.label === "Phone")?.text || "";
  const website = "https://carlosalberto.me/";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerStack}>
          <Image
            src={avatar.src}
            style={{
              width: 35,
              height: 35,
              marginRight: 10,
              objectFit: "cover",
            }}
          />
          <View>
            <Text style={styles.header}>Carlos Velázquez</Text>

            <View style={styles.contactRow}>
              <Text style={styles.small}>{location} - </Text>
              <Text style={styles.small}>{phone} - </Text>
              <Link style={styles.small} src={`mailto:${email}`}>
                {`${email} `}
              </Link>
              <Text style={styles.small}> - </Text>
              <Link style={styles.small} src={linkedinUrl}>
               {`LinkedIn `}
              </Link>
              <Text style={styles.small}> - </Text>
              <Link style={styles.small} src={website}>
                Website
              </Link>
            </View>
          </View>
        </View>

        {/* Professional Experience */}
        <View style={styles.item}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experience.map((exp, idx) => (
            <View key={idx} style={styles.item}>
              <View style={styles.row}>
                <Text style={styles.bold}>{exp.title}</Text>
                <Text>{`${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`}</Text>
              </View>
              <Text>{exp.location}</Text>
              {exp.responsibilities?.length > 0 && (
                <View style={styles.list}>
                  {exp.responsibilities.map((r, i) => (
                    <Text key={i}>• {r}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Technical Skills */}
        <View style={styles.item}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          {skills.map((skill, idx) => (
            <View key={idx} style={styles.item}>
              <Text style={styles.bold}>{skill.title}</Text>
              <Text>
                {skill.technologies
                  .map((techId) => techMap[techId] || techId)
                  .join(", ")}
              </Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.item}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((ed, idx) => (
            <View key={idx} style={styles.item}>
              <View style={styles.row}>
                <Text style={styles.bold}>{ed.title}</Text>
                <Text>{`${formatDate(ed.startDate)} - ${formatDate(ed.endDate)}`}</Text>
              </View>
              <Text>{ed.location}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

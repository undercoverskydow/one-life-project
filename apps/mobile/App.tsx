import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const communities = [
  { name: "General", unread: 6, active: true },
  { name: "Forex", unread: 18, active: false },
  { name: "Crypto", unread: 11, active: false },
  { name: "Risk", unread: 3, active: false },
];

const messages = [
  { user: "John", text: "London session breakout confirms the thesis.", mine: false },
  { user: "You", text: "Holding the first position and waiting on the retest.", mine: true },
  { user: "Sarah", text: "CPI print remains the key event for the next move.", mine: false },
];

const tabs = ["Chats", "Groups", "Search"];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <Text style={styles.eyebrow}>Trader Zone</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Live</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>TRADING FLOOR</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.communityScroll}>
          {communities.map((community) => (
            <TouchableOpacity
              key={community.name}
              style={[
                styles.communityCard,
                community.active ? styles.communityCardActive : null,
              ]}
            >
              <View style={styles.communityRow}>
                <View
                  style={[
                    styles.dot,
                    community.active ? styles.dotActive : styles.dotInactive,
                  ]}
                />
                <Text style={styles.communityName}>{community.name}</Text>
              </View>
              <Text style={styles.unread}>{community.unread}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.alertCard}>
          <Text style={styles.alertLabel}>Market briefing</Text>
          <Text style={styles.alertText}>
            Bullish continuation remains favored above support. Keep entries disciplined and avoid forcing exposure into the noise.
          </Text>
        </View>

        <View style={styles.messageList}>
          {messages.map((message) => (
            <View
              key={`${message.user}-${message.text}`}
              style={[styles.messageBubble, message.mine ? styles.messageBubbleMine : null]}
            >
              <Text style={styles.messageUser}>{message.user}</Text>
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value="My reply..."
            editable={false}
            placeholderTextColor="#8B93A1"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        {tabs.map((tab, index) => (
          <TouchableOpacity key={tab} style={[styles.tab, index === 0 ? styles.tabActive : null]}>
            <Text style={[styles.tabText, index === 0 ? styles.tabTextActive : null]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0D10",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 18,
    backgroundColor: "#12151A",
    borderBottomWidth: 1,
    borderBottomColor: "#252A32",
  },
  eyebrow: {
    color: "#8B93A1",
    fontSize: 11,
    letterSpacing: 2.8,
    textTransform: "uppercase",
  },
  title: {
    color: "#F5F7FA",
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 18,
  },
  actionButton: {
    backgroundColor: "#E00000",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  actionText: {
    color: "#F5F7FA",
    fontSize: 10,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 24,
  },
  communityScroll: {
    marginBottom: 16,
  },
  communityCard: {
    width: 140,
    backgroundColor: "#181C22",
    borderWidth: 1,
    borderColor: "#252A32",
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  communityCardActive: {
    borderColor: "#E00000",
    backgroundColor: "#1D1718",
  },
  communityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  communityName: {
    color: "#F5F7FA",
    fontWeight: "600",
    fontSize: 14,
  },
  unread: {
    color: "#F5F7FA",
    backgroundColor: "#E00000",
    borderRadius: 999,
    minWidth: 24,
    textAlign: "center",
    paddingHorizontal: 6,
    paddingVertical: 4,
    fontSize: 11,
    fontWeight: "700",
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 999,
  },
  dotActive: {
    backgroundColor: "#22C55E",
  },
  dotInactive: {
    backgroundColor: "#8B93A1",
  },
  alertCard: {
    backgroundColor: "#12151A",
    borderWidth: 1,
    borderColor: "#252A32",
    padding: 16,
    borderRadius: 18,
    marginBottom: 18,
  },
  alertLabel: {
    color: "#8B93A1",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 10,
    marginBottom: 10,
  },
  alertText: {
    color: "#F5F7FA",
    fontSize: 15,
    lineHeight: 23,
  },
  messageList: {
    gap: 10,
    marginBottom: 16,
  },
  messageBubble: {
    maxWidth: "82%",
    backgroundColor: "#12151A",
    borderWidth: 1,
    borderColor: "#252A32",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignSelf: "flex-start",
  },
  messageBubbleMine: {
    alignSelf: "flex-end",
    backgroundColor: "#1B1012",
    borderColor: "#E00000",
  },
  messageUser: {
    color: "#8B93A1",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  messageText: {
    color: "#F5F7FA",
    fontSize: 15,
    lineHeight: 22,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#12151A",
    borderWidth: 1,
    borderColor: "#252A32",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    color: "#F5F7FA",
    fontSize: 15,
    paddingVertical: 8,
  },
  sendButton: {
    backgroundColor: "#E00000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  sendText: {
    color: "#F5F7FA",
    fontSize: 14,
    fontWeight: "700",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#252A32",
    backgroundColor: "#12151A",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 12,
  },
  tabActive: {
    backgroundColor: "#181C22",
  },
  tabText: {
    color: "#8B93A1",
    fontSize: 12,
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#F5F7FA",
  },
});

import React, { useEffect, useState } from "react";
import { db } from "../../Firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import styles from "../../styles/admin/Inbox.module.css";
import { Trash2 } from "lucide-react";

function Inbox() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "inbox"));
      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
      setLoading(false);
    };
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, "inbox", id));
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <div className={styles.inboxContainer}>
      <h2 className={styles.heading}>Inbox</h2>
      {loading ? (
        <p className={styles.loading}>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className={styles.noMessages}>No messages found.</p>
      ) : (
        <div className={styles.messagesList}>
          {messages.map((msg) => (
            <div key={msg.id} className={styles.messageCard}>
              <div className={styles.messageInfo}>
                <h3 className={styles.name}>{msg.name}</h3>
                <p className={styles.email}>{msg.email}</p>
                <p className={styles.phone}>{msg.phone}</p>
                <p className={styles.interest}><strong>Interest:</strong> {msg.interest}</p>
                <p className={styles.message}>{msg.message}</p>
              </div>
              <button className={styles.deleteBtn} onClick={() => deleteMessage(msg.id)}>
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Inbox;

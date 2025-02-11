package trie;

import java.util.ArrayList;
import java.util.List;

public class TrieImpl {

    TrieNode root = new TrieNode();

    public static void main(String[] args) {

        var impl = new TrieImpl();
        // impl.testInsert();

        //impl.testWords();
        impl.testChild();
    }

    void testChild() {
        insert("Bob");
        insert("Wally");
        insert("Walter");
        insert("Bobby");

        System.out.println(root.child("Bo"));
        System.out.println(startsWith("Bo"));

    }

    void testWords() {
        insert("Bob");
        insert("Wally");
        insert("Walter");
        insert("Bobby");

        System.out.println(root.words());
    }

    void testInsert() {
        insert("Bob");
        insert("Wally");
        insert("Walter");
        insert("Bobby");
        System.out.println(root.toString());

        System.out.println(search("Bobby"));
        System.out.println(search("bob"));
        System.out.println(search("Walter"));
    }


    public void insert(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            node.setIf(c);
            node = node.child(c);
        }

        node.end = true;

    }

    public boolean search(String word) {

        TrieNode current = root;
        for (char c : word.toCharArray()) {
            if (!current.has(c)) {
                return false;
            } else {
                current = current.child(c);
            }
        }
        return true;
    }

    public List<String> startsWith(String start) {

        TrieNode current = root;

        TrieNode node = current.child(start);
        if (node == null) {
            return new ArrayList<>();
        }

        return node.words().stream().map(w -> start + w).toList();


    }


}

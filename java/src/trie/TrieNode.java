package trie;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TrieNode {

    Map<Character, TrieNode> children = new HashMap<>();
    boolean end = false;

    public TrieNode() {
    }

    public boolean has(Character c) {
        return this.children.get(c) != null;
    }

    public boolean setIf(Character c) {
        if (has(c)) {
            return false;
        }
        children.put(c, new TrieNode());
        return true;
    }

    public TrieNode child(Character c) {
        return this.children.get(c);
    }

    public TrieNode child(String start) {
        if (start.isEmpty()) {
            return this;
        }

        char c = start.toCharArray()[0];
        if (!this.has(c)) {
            return null;
        }
        return child(c).child(start.substring(1));

    }

    public List<String> words() {
        List<String> result = new ArrayList<>();
        recursiveWords("", this, result);
        return result;
    }

    private void recursiveWords(String wip, TrieNode node, List<String> result) {


        if (node.end) {
            result.add(wip);
        }
        for (var entry : node.children.entrySet()) {
            recursiveWords(wip + entry.getKey(), entry.getValue(), result);
        }

    }


    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        toStringHelper(this, sb, "", true);
        return sb.toString();
    }

    private void toStringHelper(TrieNode node, StringBuilder sb, String prefix, boolean isLast) {
        sb.append(prefix).append(isLast ? "└── " : "├── ")
                .append(node.end ? "✔ " : "")
                .append(node.children.keySet()).append("\n");

        List<Character> keys = new ArrayList<>(node.children.keySet());
        for (int i = 0; i < keys.size(); i++) {
            TrieNode child = node.children.get(keys.get(i));
            toStringHelper(child, sb, prefix + (isLast ? "    " : "│   "), i == keys.size() - 1);
        }
    }
}

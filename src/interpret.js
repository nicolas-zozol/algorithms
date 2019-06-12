let stack = '(((({}{}{}{}){}{})))';

class Expression {

    interpret(context) {

    }
}

class Terminal extends Expression {

    interpret(context) {

    }

}

class SubExpression {

    constructor(stack) {

        this.stack = stack;
    }

    interpret(context) {

    }

}

function last(stack) {
    return stack[stack.length - 1]
}

function tokenizer(S) {

    let stack = [];

    for (let i = 0; i < S.length; i++) {
        let char = S.charAt(i);
        switch (char) {
            case '{':
                stack.push('{');
                break;
            case '(':
                stack.push('(');
                break;
            case '[':
                stack.push('[');
                break;
            case ']':
                if (last(stack) !== '[') {
                    return 0;
                }
                stack.pop();
                break;
            case ')':
                if (last(stack) !== '(') {
                    return 0;
                }
                stack.pop();
                break;
            case '}':
                if (last(stack) !== '{') {
                    return 0;
                }
                stack.pop();
                break;
            default:
                return 0;
        }
    }
    if (stack.length !== 0) {
        return 0;
    }
    return 1;

}

console.log(tokenizer(stack));
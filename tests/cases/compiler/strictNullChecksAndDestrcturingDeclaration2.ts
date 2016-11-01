// @strictNullChecks: true
// @declaration: true

// Repro from #10078

declare class A {
    f({x}?: {
        x?: boolean;
    }): void;
}
declare class B {
    f({x, y}?: {
        x?: boolean;
        y?: boolean;
    }): void;
}
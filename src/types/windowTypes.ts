export type WindowId = "Resume" | "Skills" | "Projects";

export interface WindowPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface WindowState {
    minimized: boolean;
    maximized: boolean;
}

export interface WindowRef {
    zIndex: number;
}
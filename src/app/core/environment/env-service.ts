import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})

export class EnvService {
    private readonly base = 'http://172.16.10.200:2026/api';

    get apiBase(): string {
        return this.base;
    }

    url(path = ''): string {
        if (!path) return this.base
        return `${this.base}${path.startsWith('/') ? '' : '/'}${path}`;
    }
}
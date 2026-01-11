import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-conseils',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './conseils.component.html',
    styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent {
    categories = [
        { id: 'all', name: 'Tous', icon: '✨' },
        { id: 'sante', name: 'Santé', icon: '💉' },
        { id: 'alimentation', name: 'Alimentation', icon: '🥗' },
        { id: 'sommeil', name: 'Sommeil', icon: '😴' },
        { id: 'education', name: 'Éducation', icon: '📚' },
        { id: 'developpement', name: 'Développement', icon: '🎨' },
        { id: 'securite', name: 'Sécurité', icon: '🏠' }
    ];

    tips = [
        {
            id: 1,
            category: 'sante',
            title: 'Suivi des vaccinations',
            description: 'Gardez un carnet de santé à jour et programmez des rappels pour ne manquer aucun vaccin important.',
            icon: '💉',
            color: 'gradient-sante-1'
        },
        {
            id: 2,
            category: 'alimentation',
            title: 'Diversification alimentaire',
            description: 'Introduisez de nouveaux aliments progressivement, un à la fois, pour détecter d\'éventuelles allergies.',
            icon: '🥗',
            color: 'gradient-alim-1'
        },
        {
            id: 3,
            category: 'sommeil',
            title: 'Routine du coucher',
            description: 'Établissez une routine apaisante : bain, histoire, câlin. La régularité aide l\'enfant à mieux dormir.',
            icon: '😴',
            color: 'gradient-sommeil'
        },
        {
            id: 4,
            category: 'education',
            title: 'Temps d\'écran limité',
            description: 'Limitez l\'exposition aux écrans selon l\'âge. Privilégiez les activités physiques et créatives.',
            icon: '📱',
            color: 'gradient-educ-1'
        },
        {
            id: 5,
            category: 'sante',
            title: 'Hygiène dentaire',
            description: 'Brossez les dents de votre enfant dès l\'apparition de la première dent, 2 fois par jour.',
            icon: '🦷',
            color: 'gradient-sante-2'
        },
        {
            id: 6,
            category: 'developpement',
            title: 'Lecture quotidienne',
            description: 'Lisez des histoires chaque jour pour stimuler le langage et créer un moment de complicité.',
            icon: '📚',
            color: 'gradient-dev'
        },
        {
            id: 7,
            category: 'alimentation',
            title: 'Hydratation régulière',
            description: 'Proposez de l\'eau régulièrement, surtout en été. Évitez les boissons sucrées.',
            icon: '💧',
            color: 'gradient-alim-2'
        },
        {
            id: 8,
            category: 'education',
            title: 'Communication positive',
            description: 'Utilisez des phrases positives. Dites "marche doucement" plutôt que "ne cours pas".',
            icon: '💬',
            color: 'gradient-educ-2'
        },
        {
            id: 9,
            category: 'securite',
            title: 'Sécurité à la maison',
            description: 'Installez des protections sur les prises, coins de table et escaliers pour prévenir les accidents.',
            icon: '🏠',
            color: 'gradient-secu'
        }
    ];

    selectedCategory = 'all';
    filteredTips = [...this.tips];

    filterByCategory(category: string): void {
        this.selectedCategory = category;
        if (category === 'all') {
            this.filteredTips = [...this.tips];
        } else {
            this.filteredTips = this.tips.filter(tip => tip.category === category);
        }
    }

    getGradientClass(color: string): string {
        return color;
    }
}

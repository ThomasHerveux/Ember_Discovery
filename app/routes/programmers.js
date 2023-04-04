import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
    model() {
        return ['Thomas #Rakunman', 'Hugo #Violeur_de_norme'];
    }
}

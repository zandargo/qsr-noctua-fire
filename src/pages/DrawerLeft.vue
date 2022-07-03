<template>
  <div class="q-pt-lg">
    <SectionLink
      v-for="section in sections"
      :key="section.title"
      v-bind="section"
    />
  </div>
</template>

<script setup>
import SectionLink from 'components/SectionLink.vue'

const sections = [
  {
    title: 'Matérias',
    caption: 'Cadastro de matérias e seus conteúdos',
    routeTo: 'Page1',
    icon: 'person',
  },
  {
    title: 'Ciclos',
    caption: 'Iniciar ciclo de estudos',
    routeTo: 'Page2',
    icon: 'person',
  },
  {
    title: 'Estatísticas',
    caption: 'Estatísticas de desempenho por matéria',
    routeTo: 'Page3',
    icon: 'person',
  },
]

</script>

<style lang="scss" scoped>

</style>

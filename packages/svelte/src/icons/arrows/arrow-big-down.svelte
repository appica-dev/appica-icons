<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.966 4.495v7.961h3.546a.98.98 0 0 1 .913.614 1 1 0 0 1-.215 1.085L12.7 20.709a.985.985 0 0 1-1.398 0l-6.512-6.554a.997.997 0 0 1 .7-1.699h3.545v-7.96c0-.265.104-.518.29-.705a.99.99 0 0 1 .699-.291h3.954c.263 0 .514.105.7.291.185.187.29.44.29.704\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>

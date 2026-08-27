<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 19h14m1.985-1.977a2 2 0 0 0-.146-.773L13.74 4a2 2 0 0 0-3.5 0l-.815 1.405M7.936 7.973 3.14 16.25A2 2 0 0 0 4.89 19M3 3l18 18\"/>";
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

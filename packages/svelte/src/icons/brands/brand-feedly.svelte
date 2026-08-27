<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.833 12.278 4.445-4.445M10.055 14.5l2.223-2.222m0 4.444.555-.555m6.995-1.34a4 4 0 0 0 0-5.655l-5-5a4 4 0 0 0-5.656 0l-5 5a4 4 0 0 0 0 5.656L10.343 21h3.314z\"/>";
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

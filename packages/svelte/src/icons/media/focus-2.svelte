<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 12a7 7 0 0 0 7 7m-7-7a7 7 0 0 1 7-7m-7 7H3m9 7a7 7 0 0 0 7-7m-7 7v2m7-9a7 7 0 0 0-7-7m7 7h2m-9-7V3\"/>";
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

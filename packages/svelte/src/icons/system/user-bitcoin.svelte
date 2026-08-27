<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5m0 0a1.5 1.5 0 1 1 0 3H16m3.5-3a1.5 1.5 0 1 0 0-3H16M6 21v-2a4 4 0 0 1 4-4h3M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 21v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5m0 0a1.5 1.5 0 1 1 0 3H16m3.5-3a1.5 1.5 0 1 0 0-3H16m-3 6H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10m-9 0V7a4 4 0 0 1 8 0v4m-5 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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

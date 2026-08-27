<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 21h18M3 7v1a3 3 0 1 0 6 0M3 7h18M3 7l2-4h14l2 4M9 8V7m0 1a3 3 0 1 0 6 0m0 0V7m0 1a3 3 0 0 0 6 0V7M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4\"/>";
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

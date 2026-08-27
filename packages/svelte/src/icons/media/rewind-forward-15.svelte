<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 9 3-3m0 0-3-3m3 3H9a6 6 0 1 0 0 12m7 2h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3m-6 0v6\"/>";
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

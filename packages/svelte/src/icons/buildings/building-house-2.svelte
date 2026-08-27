<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.5 21h-5m5 0v-4.5A1.5 1.5 0 0 0 13 15h-2a1.5 1.5 0 0 0-1.5 1.5V21m5 0H21M9.5 21H3m0 0V10m0 11H2m1-11h5.13a.94.94 0 0 0 .651-.269l2.568-2.462a.92.92 0 0 1 1.302 0l2.568 2.462a.94.94 0 0 0 .651.269H21M3 10l1.961-4.576C5.823 3.414 6.45 3 8.638 3h6.725c2.187 0 2.815.414 3.677 2.424L21 10M3 10H2m19 0v11m0-11h1m-1 11h1M6 14h1m10 0h1\"/>";
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

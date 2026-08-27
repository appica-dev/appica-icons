<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 7 1.293-1.293A2.42 2.42 0 0 0 19 4a1 1 0 0 1 1-1h1M7 13a3 3 0 0 1 3-3m5.35-4.651 3.3 3.301a1.2 1.2 0 0 1 0 1.698l-.972.972a7.5 7.5 0 1 1-5-5l.972-.972a1.2 1.2 0 0 1 1.698 0z\"/>";
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

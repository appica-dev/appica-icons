<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 3 18 18M9 5a3 3 0 1 1 6 0v5c0 .296-.044.59-.13.874m-2 2A3 3 0 0 1 9 10.002v-1M5 10a7 7 0 0 0 10.846 5.85m2-2A6.97 6.97 0 0 0 18.998 10M8 21h8m-4-4v4\"/>";
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

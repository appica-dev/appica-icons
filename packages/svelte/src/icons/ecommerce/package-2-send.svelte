<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m11 9.5 5 3V18m-5-8.5 5-3 5 3V15l-5 3m-5-8.5V15l5 3m0-5.455 5-3.03M7 9H2m5 3H4m3 3H6\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17.001 17.5-5-4.5m0 0V7m0 6-5 4.5m5-10.5 5 4m-5-4-5 4m8.103 10.58 6.762-14.502a2 2 0 0 0-.968-2.657m-12 17.159L2.136 7.077a2 2 0 0 1 .968-2.657M11.001 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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

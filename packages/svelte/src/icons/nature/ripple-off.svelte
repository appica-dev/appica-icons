<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 7q1.372-.915 2.746-1.272m4.212.22Q10.978 6.318 12 7q4.5 3 9 0M3 17q4.5-3 9 0 3.138 2.093 6.276 1.266M3 12q4.5-3 9 0m5.482 1.429Q19.241 13.173 21 12M3 3l18 18\"/>";
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

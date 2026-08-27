<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 6.371C9 10.789 6.761 13 4 13m0-6.629h7M5 9c0 2.144 2.252 3.908 6 4m1 7 4-9 4 9m-.9-2h-6.2M6.694 3l.793.582\"/>";
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

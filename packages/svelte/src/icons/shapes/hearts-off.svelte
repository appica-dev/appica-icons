<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14.022 18-2.015 2-7.495-7.428a5 5 0 0 1 .49-7.586m3.008-1a5 5 0 0 1 3.997 2.018 4.996 4.996 0 0 1 8.908 2.098 5 5 0 0 1-.761 3.686m-8.333.026a2.81 2.81 0 0 0-.007 3.948L15.993 20 18 17.979m1.976-1.99.21-.212a2.81 2.81 0 0 0 0-3.948 2.746 2.746 0 0 0-3.907-.007l-.282.178M3.013 3 21 21\"/>";
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

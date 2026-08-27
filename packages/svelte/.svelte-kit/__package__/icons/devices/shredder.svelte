<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17.625 9.75v-4.5A2.25 2.25 0 0 0 15.375 3h-6.75a2.25 2.25 0 0 0-2.25 2.25v4.5M12 15.375V21m4.5-5.625v2.25m-9-2.25v3.375M3 10.875A1.125 1.125 0 0 1 4.125 9.75h15.75A1.125 1.125 0 0 1 21 10.875v3.375a1.125 1.125 0 0 1-1.125 1.125H4.125A1.125 1.125 0 0 1 3 14.25z\"/>";
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

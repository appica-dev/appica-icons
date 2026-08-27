<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.16 10.985C5.33 9.05 7.69 3 14.355 3 17.688 3 19 4.382 19 6.9c0 2.597-2.612 6.1-9 6.1m2.5-7L7 21\"/>";
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

<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3c-3.5-.007-7 5.545-7 11.083C5 18.237 7.8 21 12 21c4.034-.177 7-2.763 7-6.917C19 8.545 15.5 3.007 12 3m0 0-1.5 5 3.5 2.5-2 3.5\"/>";
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

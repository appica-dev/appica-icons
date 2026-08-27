<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.575 3.597a2 2 0 0 0 2.849 2.808M17 5a2 2 0 0 0 2 2m-2-2a2 2 0 1 1 2 2m-2-2H9m10 2v8M7 19a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h10M5 17V7m12.574 10.598a2 2 0 0 0 2.826 2.83M3 3l18 18\"/>";
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

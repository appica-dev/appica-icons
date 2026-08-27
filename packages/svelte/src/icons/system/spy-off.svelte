<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 11h8m4 0h6M5 11V7c0-.571.16-1.105.437-1.56M8 4h8a3 3 0 0 1 3 3v4m-9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h4m.88-2.123a3 3 0 1 0 4.239 4.247m.59-3.414a3 3 0 0 0-1.425-1.422M3 3l18 18\"/>";
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

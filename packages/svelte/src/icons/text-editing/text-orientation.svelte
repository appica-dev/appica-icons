<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9.002 15-5-5c-1.367-1.367-1.367-3.633 0-5s3.633-1.367 5 0l5 5m-8.5 1.5 5-5m10.5 5.5-9 9m9-9v4m0-4h-4\"/>";
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

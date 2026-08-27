<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.73 14.092a6.355 6.355 0 0 0-3.177 6.355 6.355 6.355 0 0 0 6.355-3.178m-6.355-4.236a8.474 8.474 0 0 1 7.414 7.414 6.36 6.36 0 0 0 3.178-5.296A9.53 9.53 0 0 0 20.5 6.678 3.18 3.18 0 0 0 17.323 3.5a9.53 9.53 0 0 0-8.474 6.355 6.36 6.36 0 0 0-5.296 3.178m10.592-4.237a1.06 1.06 0 1 0 2.119 0 1.06 1.06 0 0 0-2.119 0\"/>";
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

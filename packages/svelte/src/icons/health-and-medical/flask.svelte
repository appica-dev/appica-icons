<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.036 3h5.928m-4.94 6h3.952m-3.952 0V3m0 6L6.072 20a.71.71 0 0 0 .204.871q.13.099.29.129h10.868a.69.69 0 0 0 .493-.375.7.7 0 0 0 0-.625L13.977 9m0 0V3\"/>";
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

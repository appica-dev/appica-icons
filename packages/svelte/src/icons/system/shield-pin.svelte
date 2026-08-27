<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.59 20.829a12 12 0 0 1-.597.171 12.01 12.01 0 0 1-7.432-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.506-3A12.01 12.01 0 0 0 20.5 6c.506 1.72.614 3.512.342 5.248M18.998 18v.01m2.122 2.111a3 3 0 0 0-3.79-4.616 3 3 0 0 0-.454 4.616q.627.628 2.122 1.879 1.579-1.335 2.122-1.879\"/>";
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

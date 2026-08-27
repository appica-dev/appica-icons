<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.2 2.25h5.85a.975.975 0 0 1 .975.975v17.55a.975.975 0 0 1-.975.975H4.2a1.95 1.95 0 0 1-1.95-1.95V4.2A1.95 1.95 0 0 1 4.2 2.25M13.95 2.25h5.85a1.95 1.95 0 0 1 1.95 1.95v15.6a1.95 1.95 0 0 1-1.95 1.95h-5.85a.975.975 0 0 1-.975-.975V3.225a.975.975 0 0 1 .975-.975\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>

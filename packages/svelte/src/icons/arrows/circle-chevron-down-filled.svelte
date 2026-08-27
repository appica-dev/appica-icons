<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75a9.75 9.75 0 1 1 0-19.5m-2.236 8.086a.975.975 0 0 0-1.378 1.378l2.925 2.925a.975.975 0 0 0 1.378 0l2.925-2.925a.975.975 0 0 0 0-1.378l-.091-.081a.975.975 0 0 0-1.287.08l-2.237 2.235z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
